import { NextFunction, Request, Response } from 'express';

export const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.method, req.path, req.query, req.params, req.body);

  next();
};
