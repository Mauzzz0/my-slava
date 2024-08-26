import 'reflect-metadata';

import express from 'express';

import { logRoutes } from './bootstrap/log.routes';
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

  const port = 2000;
  server.listen(port, () => {
    console.log(`Server is started on port ${port}...`);
  });
};

bootstrap();
