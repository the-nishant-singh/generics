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
      const { text, page, size } = req.query;
      const npmUrl = `${config.NPM_REGISTERY_BASE_PATH}/-/v1/search?text=${text}&size=${size || 10}&from=${page || 0}`;
      const response = await fetch(npmUrl);
      const data = await response.json();
      return res.json({ message: 'Data Fetched', data });
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