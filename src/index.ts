import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import routes from './routes';
import db from './services/db';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
db();

// Test Route
app.get('/', (req, res) => {
  res.send('Welcome to Moongate');
});

app.use('/api', routes);

app.listen(process.env.PORT, () => {
  console.log(`Moongate is running at at http://localhost:${process.env.PORT}`);
});