import 'reflect-metadata';

import express from 'express';

import { logRoutes } from './bootstrap/log.routes';
import { config } from './config';
import { errorHandler } from './middlewares/error.handler';
import { logMiddleware } from './middlewares/log.middleware';
import { TaskRouter } from './modules/task/task.controller';

const bootstrap = () => {
  const server = express();
  server.use(express.json());
  server.use(logMiddleware);

  server.use('/task', TaskRouter);

  server.use(errorHandler);

  logRoutes(server);

  server.listen(config.PORT, () => {
    console.log(`Server is started on port ${config.PORT}...`);
  });
};

bootstrap();
