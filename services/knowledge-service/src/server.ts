import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => res.json({ status: 'ok', service: 'knowledge-service' }));

app.post('/api/v1/articles', (req, res) => {
  const { title } = req.body || {};
  if (!title) return res.status(400).json({ error: 'invalid' });
  res.status(201).json({ id: 'k1', title });
});

app.post('/api/v1/articles/search', (req, res) => {
  const { query } = req.body || {};
  res.json({ query, results: [] });
});

const PORT = process.env.PORT ? Number(process.env.PORT) : 4005;
app.listen(PORT, () => console.log(`[knowledge-service] listening on :${PORT}`));
