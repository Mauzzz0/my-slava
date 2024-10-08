import express, { Request, Response } from 'express';

import { IdNumberDto } from '../../shared/id.number.dto';
import { validate } from '../../validation';
import { CreateTaskDto } from './task.dto';
import { TaskService } from './task.service';

const TaskController = {
  async getOne(req: Request, res: Response) {
    const params = validate(IdNumberDto, req.params);

    const result = await TaskService.getById(params.id);

    res.json(result);
  },

  async create(req: Request, res: Response) {
    const body = validate(CreateTaskDto, req.body);

    const result = await TaskService.create(body);

    res.json(result);
  },
};

export const TaskRouter = express.Router();
TaskRouter.get('/:id', TaskController.getOne);
TaskRouter.post('/', TaskController.create);
