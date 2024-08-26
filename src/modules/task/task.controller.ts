import express, { Request, Response } from 'express';

const TaskController = {
  getOne(req: Request, res: Response) {
    res.send('sdfsdf');
  },
};

export const TaskRouter = express.Router();
TaskRouter.get('/:id', TaskController.getOne);
