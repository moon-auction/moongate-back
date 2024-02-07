import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(() => {
  console.log(`Moongate is running at at http://localhost:${process.env.PORT}`);
});