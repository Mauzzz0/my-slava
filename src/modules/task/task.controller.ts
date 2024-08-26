import express, { Request, Response } from 'express';

import { IdNumberDto } from '../../shared/id.number.dto';
import { validate } from '../../validation';
import { CreateTaskDto } from './task.dto';

const TaskController = {
  getOne(req: Request, res: Response) {
    const params = validate(IdNumberDto, req.params);

    res.json(params);
  },

  create(req: Request, res: Response) {
    const body = validate(CreateTaskDto, req.body);

    res.json(body);
  },
};

export const TaskRouter = express.Router();
TaskRouter.get('/:id', TaskController.getOne);
TaskRouter.post('/', TaskController.create);
