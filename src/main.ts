import 'reflect-metadata';
import 'express-async-errors';

import express from 'express';

import { logRoutes } from './bootstrap/log.routes';
import { config } from './config';
import { connectDatabase } from './database';
import { errorHandler } from './middlewares/error.handler';
import { logMiddleware } from './middlewares/log.middleware';
import { TaskRouter } from './modules/task/task.controller';

const bootstrap = async () => {
  const server = express();
  server.use(express.json());
  server.use(logMiddleware);

  server.use('/task', TaskRouter);

  server.use(errorHandler);

  logRoutes(server);

  await connectDatabase();

  server.listen(config.PORT, () => {
    console.log(`Server is started on port ${config.PORT}...`);
  });
};

bootstrap();
