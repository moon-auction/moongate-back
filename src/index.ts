import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';
import cors from 'cors';
import swaggerConfig from './config/swaggerConfig';
import session from 'express-session';
import MongoStore from 'connect-mongo';

dotenv.config();

const app = express();
const db = require('./config/db');

declare module 'express-session' {
  interface SessionData {
  isLogin: Boolean;
  email: string;
  _id: string;
  name: string;
  verifiedInfo: any;
  role: string;
  level: number;
}}

app.use(session({
  secret: process.env.SECRETSESSION ? process.env.SECRETSESSION : 'moongate',
  resave: false,
  saveUninitialized: false,
  cookie:{maxAge:(3.6e+6)*24},
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI
  })
}));

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