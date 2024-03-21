import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';
import cors from 'cors';
import swaggerConfig from './config/swaggerConfig';
dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/api', routes);
app.use(swaggerConfig);

// Just to check if the server is running
app.get('/', (req, res) => {
  res.send('Hello, Moongate!');
});

app.listen(process.env.PORT,() => {
  console.log(`Moongate is running at at http://localhost:${process.env.PORT}`);
});