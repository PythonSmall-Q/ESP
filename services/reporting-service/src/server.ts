import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => res.json({ status: 'ok', service: 'reporting-service' }));

app.post('/api/v1/reports', (req, res) => {
  const { name } = req.body || {};
  if (!name) return res.status(400).json({ error: 'invalid' });
  res.status(201).json({ id: 'r1', name });
});

app.get('/api/v1/reports/:id/data', (req, res) => {
  res.json({ id: req.params.id, rows: [] });
});

const PORT = process.env.PORT ? Number(process.env.PORT) : 4006;
app.listen(PORT, () => console.log(`[reporting-service] listening on :${PORT}`));
