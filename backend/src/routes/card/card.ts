import { Router } from 'express';
import CardController from '../../controllers/card/card'; // Ajuste o caminho conforme necessário

const cardRoutes = Router();

cardRoutes.post('/', CardController.store);
cardRoutes.get('/', CardController.findAll);
cardRoutes.get('/:id', CardController.findById);
cardRoutes.delete('/:id', CardController.delete);
cardRoutes.put('/:id', CardController.update);

export default cardRoutes;