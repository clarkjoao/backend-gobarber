import { Router } from 'express';

import CreateUserServices from '../services/CreateUserServices';
const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
    try {
        const { name, email, password } = request.body;
        const createUser = new CreateUserServices();
        const user = await createUser.execute({ email, name, password });
        return response.json(user);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default usersRouter;
