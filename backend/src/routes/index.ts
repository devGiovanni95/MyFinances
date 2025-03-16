import { Router } from "express";
import userRoutes from './user/user';
import cardRoutes from './card/card';
import transactionRoutes from './transaction/transaction';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/cards', cardRoutes);
routes.use('/transactions', transactionRoutes);

export default routes