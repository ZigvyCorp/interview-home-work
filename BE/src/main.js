import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port = 3333;

app.use(express.json());
app.use(cors({ origin: process.env.REACT_URL }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on http://127.0.0.1:${port}`);
});
