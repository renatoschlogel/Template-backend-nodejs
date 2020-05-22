import { Router } from 'express';

import exempleUsersRouter from './exempleUsers.routes';

const routes = Router();

routes.use('/users', exempleUsersRouter);

export default routes;
