import { CreateTaskDto } from './task.dto';

export const TaskService = {
  getById(id: number) {
    console.log('ыолаптлыовта');
  },

  create(dto: CreateTaskDto) {
    console.log(123123);
  },
};
