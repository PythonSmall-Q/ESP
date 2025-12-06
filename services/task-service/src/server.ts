import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { WebSocketServer } from 'ws';
import { z } from 'zod';

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const PORT = process.env.PORT ? Number(process.env.PORT) : 4001;

// Health
app.get('/health', (_req, res) => res.json({ status: 'ok', service: 'task-service' }));

// In-memory tasks (demo)
const TaskSchema = z.object({
  title: z.string().min(1),
  dueDate: z.string().optional(),
  priority: z.enum(['high','medium','low']).default('medium')
});

let tasks: Array<{ id: string; title: string; dueDate?: string; priority: 'high'|'medium'|'low' }> = [];

app.post('/api/v1/tasks', (req, res) => {
  const parsed = TaskSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });
  const id = crypto.randomUUID();
  const task = { id, ...parsed.data };
  tasks.push(task);
  broadcast({ type: 'task.created', payload: task });
  res.status(201).json(task);
});

app.get('/api/v1/tasks/today', (_req, res) => {
  res.json(tasks);
});

// Simple WebSocket broadcast
const wss = new WebSocketServer({ noServer: true });
const clients = new Set<WebSocket>();

function broadcast(message: unknown) {
  const data = JSON.stringify(message);
  clients.forEach((ws) => {
    try { ws.send(data); } catch {}
  });
}

const server = app.listen(PORT, () => {
  console.log(`[task-service] listening on :${PORT}`);
});

server.on('upgrade', (request, socket, head) => {
  if (request.url === '/ws') {
    wss.handleUpgrade(request, socket, head, (ws) => {
      clients.add(ws);
      ws.on('close', () => clients.delete(ws));
    });
  } else {
    socket.destroy();
  }
});
