import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import routes from './routes';
import './database';

const app = express();
app.use(express.json());
app.use(routes);


app.listen(3333, () => {
  console.log('port 3333!');
});
