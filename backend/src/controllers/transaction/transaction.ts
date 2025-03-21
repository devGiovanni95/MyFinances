import { Request, Response } from 'express';
import Transaction from '../../models/transaction';
import Card from '../../models/card';
import { Between, IsNull, Not } from 'typeorm';

export default class TransactionController {
  //cartao avulsa
  static async store(req: Request, res: Response) {
    const { name, amount, date, monthly, description, cardId } = req.body;

    if (!name || !amount || !date || !cardId) {
      return res.status(400).json({ error: 'Nome, valor, data e cardId são obrigatórios' });
    }
    
     const card = await Card.findOneBy({ id: Number(cardId) });
          if (!card) {
            return res.status(404).json({ error: 'Cartão não encontrado' });
          }

    const transaction = new Transaction();
    transaction.name = name;
    transaction.amount = amount;
    transaction.date = new Date(date);
    transaction.monthly = monthly;
    transaction.description = description;
    transaction.card = card;

    try {
      await transaction.save();
      return res.status(201).json(transaction);
    } catch (error:any) {
      return res.status(500).json({ error: 'Erro ao criar transação', details: error.message });
    }
  }

  // static async storeMothly(req: Request, res: Response) {
  //   const { name, amount, date, monthly, description, cardId, parcel } = req.body;

  //   if (!name || !amount || !date || !cardId) {
  //     return res.status(400).json({ error: 'Nome, valor, data e cardId são obrigatórios' });
  //   }
    
  //    const card = await Card.findOneBy({ id: Number(cardId) });

  //   if (!card) {
  //     return res.status(404).json({ error: 'Cartão não encontrado' });
  //   }

  //   if (parcel <= 0) {
  //     return res.status(404).json({ error: 'Quantidade de parcelas inválido'});
  //   }
  //   if (monthly == true) {
  //     return res.status(404).json({ error: 'Conta mensal não pode ser lançada aqui'});
  //   }

  //   for(let i=1; i <= parcel; i++){
  //     try {
  //     const transaction = new Transaction();
  //     transaction.name = name;
  //     transaction.amount = amount;
  //     let dateAux = new Date(date);

  //     // if(i == 1){
  //     //   transaction.date = dateAux;
  //     // }  else{
  //     //   transaction.date = new Date(dateAux.setMonth(dateAux.getMonth()  + ( i - 1 ) ));
  //     // }
  //     transaction.date = new Date(dateAux.setMonth(dateAux.getMonth()  + ( i - 1 ) ));

  //     transaction.monthly = monthly;
  //     transaction.description = i + '/'+ parcel + '  ' + description;
  //     transaction.card = card;
  //       await transaction.save();
  //       return res.status(201).json(transaction);
  //     } catch (error:any) {
  //       return res.status(500).json({ error: 'Erro ao criar transação', details: error.message });
  //     }
  //   }
  // }

  //parcelada
  static async storeMonthly(req: Request, res: Response) {
    const { name, amount, date, monthly, description, cardId, parcel } = req.body;

    if (!name || !amount || !date || !cardId) {
        return res.status(400).json({ error: 'Nome, valor, data e cardId são obrigatórios' });
    }

    try {
        const card = await Card.findOneBy({ id: Number(cardId) });

        if (!card) {
            return res.status(404).json({ error: 'Cartão não encontrado' });
        }

        if (parcel <= 0) {
            return res.status(400).json({ error: 'Quantidade de parcelas inválida' });
        }

        if (monthly) {
            return res.status(400).json({ error: 'Conta mensal não pode ser lançada aqui' });
        }

        const transactions = []; // Array para armazenar as transações criadas

        for (let i = 1; i <= parcel; i++) {
            const transaction = new Transaction();
            transaction.name = name;
            transaction.amount = amount;
            let dateAux = new Date(date);
            transaction.date = new Date(dateAux.setMonth(dateAux.getMonth() + (i - 1)));
            transaction.monthly = monthly;
            transaction.description = i + '/' + parcel + ' ' + description;
            transaction.card = card;
            await transaction.save();
            transactions.push(transaction); // Adiciona a transação ao array
        }

        return res.status(201).json(transactions); // Retorna todas as transações criadas
    } catch (error: any) {
        return res.status(500).json({ error: 'Erro ao criar transações', details: error.message });
    }
}

//despesa fixa 1 ano
static async storeRecurrent(req: Request, res: Response) {
  const { name, amount, date, monthly, description, cardId } = req.body;

  let parcel = 12

  if (!name || !amount || !date || !cardId) {
      return res.status(400).json({ error: 'Nome, valor, data e cardId são obrigatórios' });
  }

  try {
      const card = await Card.findOneBy({ id: Number(cardId) });

      if (!card) {
          return res.status(404).json({ error: 'Cartão não encontrado' });
      }

      if (!monthly) {
          return res.status(400).json({ error: 'Conta que não seja mensal não pode ser lançada aqui' });
      }

      const transactions = []; // Array para armazenar as transações criadas

      for (let i = 1; i <= parcel; i++) {
          const transaction = new Transaction();
          transaction.name = name;
          transaction.amount = amount;
          let dateAux = new Date(date);
          transaction.date = new Date(dateAux.setMonth(dateAux.getMonth() + (i - 1)));
          transaction.monthly = monthly;
          transaction.description = description;
          transaction.card = card;
          await transaction.save();
          transactions.push(transaction); // Adiciona a transação ao array
      }

      return res.status(201).json(transactions); // Retorna todas as transações criadas
  } catch (error: any) {
      return res.status(500).json({ error: 'Erro ao criar transações', details: error.message });
  }
}

//despesa recorrente avulsa
static async storeRecurrentSeparate(req: Request, res: Response) {
  const { name, amount, date, monthly, description } = req.body;

  let parcel = 12

  if (!name || !amount || !date  ) {
      return res.status(400).json({ error: 'Nome, valor, data são obrigatórios' });
  }

  try {
      if (!monthly) {
          return res.status(400).json({ error: 'Conta que não seja mensal não pode ser lançada aqui' });
      }

      const transactions = []; // Array para armazenar as transações criadas

      for (let i = 1; i <= parcel; i++) {
          const transaction = new Transaction();
          transaction.name = name;
          transaction.amount = amount;
          let dateAux = new Date(date);
          transaction.date = new Date(dateAux.setMonth(dateAux.getMonth() + (i - 1)));
          transaction.monthly = monthly;
          transaction.description = description;
          await transaction.save();
          transactions.push(transaction); // Adiciona a transação ao array
      }

      return res.status(201).json(transactions); // Retorna todas as transações criadas
  } catch (error: any) {
      return res.status(500).json({ error: 'Erro ao criar transações', details: error.message });
  }
}

 // avulsa
static async storeSeparate(req: Request, res: Response) {
  const { name, amount, date, monthly, description } = req.body;

  if (!name || !amount || !date  ) {
    return res.status(400).json({ error: 'Nome, valor, data e cardId são obrigatórios' });
  }

  const transaction = new Transaction();
  transaction.name = name;
  transaction.amount = amount;
  transaction.date = new Date(date);
  transaction.monthly = monthly;
  transaction.description = description;
 

  try {
    await transaction.save();
    return res.status(201).json(transaction);
  } catch (error:any) {
    return res.status(500).json({ error: 'Erro ao criar transação', details: error.message });
  }
}

  static async findAll(req: Request, res: Response) {
    try {
      const transactions = await Transaction.find();
      return res.json(transactions);
    } catch (error:any) {
      return res.status(500).json({ error: 'Erro ao buscar transações', details: error.message });
    }
  }

  static async findById(req: Request, res: Response) {
    const { id } = req.params;

    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ error: 'O id é obrigatório' });
    }

    try {
      const transaction = await Transaction.findOneBy({ id: Number(id) });
      if (!transaction) {
        return res.status(404).json({ error: 'Transação não encontrada' });
      }
      return res.json(transaction);
    } catch (error:any) {
      return res.status(500).json({ error: 'Erro ao buscar transação', details: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;

    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ error: 'O id é obrigatório' });
    }

    try {
      const transaction = await Transaction.findOneBy({ id: Number(id) });
      if (!transaction) {
        return res.status(404).json({ error: 'Transação não encontrada' });
      }

      await transaction.remove();
      return res.status(204).json();
    } catch (error:any) {
      return res.status(500).json({ error: 'Erro ao deletar transação', details: error.message });
    }
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, amount, date, monthly, description, cardId } = req.body;

    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ error: 'O id é obrigatório' });
    }

    try {
       const card = await Card.findOneBy({ id: Number(id) });
            if (!card) {
              return res.status(404).json({ error: 'Cartão não encontrado' });
            }

      const transaction = await Transaction.findOneBy({ id: Number(id) });
      if (!transaction) {
        return res.status(404).json({ error: 'Transação não encontrada' });
      }

      transaction.name = name;
      transaction.amount = amount;
      transaction.date = new Date(date);
      transaction.monthly = monthly;
      transaction.description = description;
      transaction.card = card;

      await transaction.save();
      return res.json(transaction);
    } catch (error:any) {
      return res.status(500).json({ error: 'Erro ao atualizar transação', details: error.message });
    }
  }

  static async findMonthlyTransactionsWithoutCard(req: Request, res: Response) {
    const { year, month } = req.query;

    if (!year || !month) {
        return res.status(400).json({ error: 'Ano e mês são obrigatórios' });
    }

    const yearNumber = Number(year);
    const monthNumber = Number(month);

    if (isNaN(yearNumber) || isNaN(monthNumber)) {
        return res.status(400).json({ error: 'Ano e mês devem ser números' });
    }

    try {
        const startDate = new Date(yearNumber, monthNumber - 1, 1); // Primeiro dia do mês
        const endDate = new Date(yearNumber, monthNumber, 0); // Último dia do mês

        const transactions = await Transaction.find({
            where: {
                date: Between(startDate, endDate),
                card: IsNull() // Filtra transações sem cartão
            }
        });

        return res.json(transactions);
    } catch (error: any) {
        return res.status(500).json({ error: 'Erro ao buscar transações', details: error.message });
    }
}

static async findMonthlyTransactionsWithCard(req: Request, res: Response) {
  const { year, month } = req.query;

  if (!year || !month) {
      return res.status(400).json({ error: 'Ano e mês são obrigatórios' });
  }

  const yearNumber = Number(year);
  const monthNumber = Number(month);

  if (isNaN(yearNumber) || isNaN(monthNumber)) {
      return res.status(400).json({ error: 'Ano e mês devem ser números' });
  }

  try {
      const startDate = new Date(yearNumber, monthNumber - 1, 1); // Primeiro dia do mês
      const endDate = new Date(yearNumber, monthNumber, 0); // Último dia do mês

      const transactions = await Transaction.find({
          where: {
              date: Between(startDate, endDate),
              card: Not(IsNull()) // Filtra transações com cartão
          }
      });

      return res.json(transactions);
  } catch (error: any) {
      return res.status(500).json({ error: 'Erro ao buscar transações', details: error.message });
  }
}

static async findTransactionsByCardAndMonth(req: Request, res: Response) {
  const { year, month } = req.query;

  if (!year || !month) {
      return res.status(400).json({ error: 'Ano e mês são obrigatórios' });
  }

  const yearNumber = Number(year);
  const monthNumber = Number(month);

  if (isNaN(yearNumber) || isNaN(monthNumber)) {
      return res.status(400).json({ error: 'Ano e mês devem ser números' });
  }

  try {
      const startDate = new Date(yearNumber, monthNumber - 1, 1);
      const endDate = new Date(yearNumber, monthNumber, 0);

      const cards = await Card.find({
          relations: ['transactions'], // Carrega as transações associadas
      });

      const result = cards.map(card => {
          const filteredTransactions = card.transactions.filter(transaction => {
              return transaction.date >= startDate && transaction.date <= endDate;
          });

          const formattedTransactions = filteredTransactions.map(transaction => ({
              name: transaction.name,
              amount: transaction.amount,
              date: transaction.date.toLocaleDateString('pt-BR'), // Formata a data
              monthly: transaction.monthly,
              description: transaction.description,
          }));

          return {
              card: card.name,
              status: card.status,
              transactions: formattedTransactions,
          };
      }).filter(cardData => cardData.transactions.length > 0); // Remove cartões sem transações no mês

      return res.json(result);
  } catch (error: any) {
      return res.status(500).json({ error: 'Erro ao buscar transações', details: error.message });
  }
}

static async updateStatus(req: Request, res: Response) {
  const { id } = req.params;
  const { name, amount, date, monthly, description, cardId } = req.body;

  if (!id || isNaN(Number(id))) {
    return res.status(400).json({ error: 'O id é obrigatório' });
  }

  try {
     const card = await Card.findOneBy({ id: Number(id) });
          if (!card) {
            return res.status(404).json({ error: 'Cartão não encontrado' });
          }

    const transaction = await Transaction.findOneBy({ id: Number(id) });
    if (!transaction) {
      return res.status(404).json({ error: 'Transação não encontrada' });
    }

    transaction.name = name;
    transaction.amount = amount;
    transaction.date = new Date(date);
    transaction.monthly = monthly;
    transaction.description = description;
    transaction.card = card;

    await transaction.save();
    return res.json(transaction);
  } catch (error:any) {
    return res.status(500).json({ error: 'Erro ao atualizar transação', details: error.message });
  }
}

}