import express from 'express';
import cors from 'cors';
import methodOverride from 'method-override';
import router from './routes/index.js';

const app = express();
const PORT = 8080;
app.use(cors());
app.use(methodOverride('_method'));
app.use(router);

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
