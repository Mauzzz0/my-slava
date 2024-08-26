import express from 'express';

import { logRoutes } from './log.routes';

const server = express();
server.use(express.json());

const port = 2000;

const taskRouter = express.Router();
const userRouter = express.Router();

taskRouter.get('/:id', (req, res) => {
  res.send({ a: 10 });
});

userRouter.get('/:id', (req, res) => {});

server.use('/task', taskRouter);
server.use('/user', userRouter);

logRoutes(server);

server.listen(port, () => {
  console.log(`Server is started on port ${port}...`);
});
