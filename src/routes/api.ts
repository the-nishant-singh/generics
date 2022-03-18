import * as express from 'express';
import { NpmRegisteryRouter } from './npm-registery';


export const api = express.Router();

api.use('/npm-registery', new NpmRegisteryRouter().router);