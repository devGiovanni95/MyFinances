import { Router } from 'express';
import TransactionController from '../../controllers/transaction/transaction'; // Ajuste o caminho conforme necessário

const transactionRoutes = Router();

transactionRoutes.post('/', TransactionController.store);
transactionRoutes.post('/monthly', TransactionController.storeMonthly);
transactionRoutes.post('/recurrent', TransactionController.storeRecurrent);

transactionRoutes.post('/separate/recurrent', TransactionController.storeRecurrentSeparate);
transactionRoutes.post('/separate', TransactionController.storeSeparate);

transactionRoutes.get('/', TransactionController.findAll);
transactionRoutes.get('/:id', TransactionController.findById);
// avulsas
transactionRoutes.get('/monthly/no-card', TransactionController.findMonthlyTransactionsWithoutCard);
// cartao
transactionRoutes.get('/monthly/with-card', TransactionController.findMonthlyTransactionsWithCard);
transactionRoutes.get('/monthly/with-card1', TransactionController.findTransactionsByCardAndMonth);

transactionRoutes.delete('/:id', TransactionController.delete);
transactionRoutes.put('/:id', TransactionController.update);

export default transactionRoutes;