import { Request, Response, NextFunction } from 'express';
import fetch from 'node-fetch';

// Internal Dependencies
import { config } from '../../config';

export class NpmRegisteryRoutes {
  public static getPackagesList = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { query, page, size } = req.query;
      const npmUrl = `${config.NPM_REGISTERY_BASE_PATH}/-/v1/search?text=${query}&size=${size || 10}&from=${page || 0}`;
      const response = await fetch(npmUrl);
      return res.json({ message: 'Data Fetched', data: response });
    } catch (error) {
      next(error);
    }
  }

  public static getPackageDetails = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {

    } catch (error) {
      next(error);
    }
  }
}