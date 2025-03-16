import { Request, Response } from 'express';
import Card from '../../models/card';
import User from '../../models/user';

export default class CardController {
  static async store(req: Request, res: Response) {
    const { name, status, userId } = req.body;

    if (!name || !status || !userId) {
      return res.status(400).json({ error: 'Nome, status e userId são obrigatórios' });
    }

    
    try {

      const user = await User.findOneBy({ id: userId }); // Busca o usuário pelo userId

      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }


      const card = new Card();
      card.name = name;
      card.status = status;
      card.owner = user;

      await card.save();
      return res.status(201).json(card);
    } catch (error:any) {
      return res.status(500).json({ error: 'Erro ao criar cartão', details: error.message });
    }
  }

  static async findAll(req: Request, res: Response) {
    try {
      const cards = await Card.find();
      return res.json(cards);
    } catch (error:any) {
      return res.status(500).json({ error: 'Erro ao buscar cartões', details: error.message });
    }
  }

  static async findById(req: Request, res: Response) {
    const { id } = req.params;

    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ error: 'O id é obrigatório' });
    }

    try {
      const card = await Card.findOneBy({ id: Number(id) });
      if (!card) {
        return res.status(404).json({ error: 'Cartão não encontrado' });
      }
      return res.json(card);
    } catch (error:any) {
      return res.status(500).json({ error: 'Erro ao buscar cartão', details: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;

    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ error: 'O id é obrigatório' });
    }

    try {
      const card = await Card.findOneBy({ id: Number(id) });
      if (!card) {
        return res.status(404).json({ error: 'Cartão não encontrado' });
      }

      await card.remove();
      return res.status(204).json();
    } catch (error:any) {
      return res.status(500).json({ error: 'Erro ao deletar cartão', details: error.message });
    }
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, status, userId } = req.body;

    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ error: 'O id é obrigatório' });
    }

    try {

      const user = await User.findOneBy({ id: userId }); // Busca o usuário pelo userId

      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }

      const card = await Card.findOneBy({ id: Number(id) });
      if (!card) {
        return res.status(404).json({ error: 'Cartão não encontrado' });
      }

      card.name = name;
      card.status = status;
      card.owner = user;

      await card.save();
      return res.json(card);
    } catch (error:any) {
      return res.status(500).json({ error: 'Erro ao atualizar cartão', details: error.message });
    }
  }
}