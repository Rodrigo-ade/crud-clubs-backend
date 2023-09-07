import express from 'express';
import cors from 'cors';
import router from './routes/index.js';
import { PORT } from './services/getClubs.js';

const app = express();
app.use(cors());
app.use(express.static('src/data/uploads'));
app.use(router);

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
