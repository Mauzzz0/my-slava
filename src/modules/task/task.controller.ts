import express, { Request, Response } from 'express';

import { IdNumberDto } from '../../shared/id.number.dto';
import { validate } from '../../validation';

const TaskController = {
  getOne(req: Request, res: Response) {
    const params = validate(IdNumberDto, req.params);

    res.send(params);
  },
};

export const TaskRouter = express.Router();
TaskRouter.get('/:id', TaskController.getOne);
