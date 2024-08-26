import { TaskEntity } from '../../database/entities/task.entity';
import { CreateTaskDto } from './task.dto';

export const TaskService = {
  async getById(id: number) {
    const task = await TaskEntity.findOne({ where: { id } });
    if (!task) {
      throw Error(`Task [${id}] not found`);
    }

    return task;
  },

  async create(dto: CreateTaskDto) {
    return TaskEntity.create({
      title: dto.title,
      description: dto.description,
    });
  },
};
