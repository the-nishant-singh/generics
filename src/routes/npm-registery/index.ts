// NPM Deps
import * as express from 'express';

// Internal Deps
import { NpmRegisteryRoutes } from './routes';
export class NpmRegisteryRouter {
  router: express.Router;
  constructor() {
    this.router = express.Router();
    this.router.get('/get-packages', NpmRegisteryRoutes.getPackagesList);
    this.router.get('/package-details', NpmRegisteryRoutes.getPackageDetails);
  }
}
