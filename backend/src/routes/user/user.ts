import { Router } from 'express';
import UserController from './../../controllers/user/user'; // Ajuste o caminho conforme necessário

const userRoutes = Router();

userRoutes.post('/', UserController.store);
userRoutes.get('/', UserController.findAll);
userRoutes.get('/:id', UserController.findById);
userRoutes.delete('/:id', UserController.delete);
userRoutes.put('/:id', UserController.update);

export default userRoutes;