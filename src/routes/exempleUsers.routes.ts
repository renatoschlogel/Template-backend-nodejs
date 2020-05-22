import { Router } from "express";
import ExempleCreateUserService from '../services/ExempleCreateUserService';


const exempleUsersRouter = Router();

exempleUsersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createUser = new ExempleCreateUserService();
    const user = await createUser.execute({ name, email, password });

    delete user.password;

    return response.json(user);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default exempleUsersRouter;
