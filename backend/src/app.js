import express from 'express';
import cors from 'cors';

import { resolve } from 'path';

import routes from './routes';

import './database';

class App {
  constructor(){
    this.server = express();
    this.middlewares();
    this.routes();
    
  }

  middlewares(){
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use('/storage', express.static(resolve(__dirname, '..', 'storage', 'users')));

  }
  routes(){
    this.server.use(routes);
  }
}

export default new App().server;