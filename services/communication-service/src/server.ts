import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: '*' } });

app.get('/health', (_req, res) => res.json({ status: 'ok', service: 'communication-service' }));

io.on('connection', (socket) => {
  socket.on('message.send', (msg) => {
    io.emit('message.new', { id: Date.now().toString(), text: msg });
  });
});

const PORT = process.env.PORT ? Number(process.env.PORT) : 4003;
httpServer.listen(PORT, () => {
  console.log(`[communication-service] listening on :${PORT}`);
});
