import { Request, Response } from 'express';
import User from '../../models/user';

export default class UserController {
  static async store(req: Request, res: Response) {
    const { email, name } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'O email é obrigatório' });
    }

    const user = new User();
    user.email = email;
    user.name = name;

    try {
      await user.save();
      return res.status(201).json(user);
    } catch (error:any) {
      return res.status(500).json({ error: 'Erro ao criar usuário', details: error.message });
    }
  }

  static async findAll(req: Request, res: Response) {
    try {
      const users = await User.find();
      return res.json(users);
    } catch (error:any) {
      return res.status(500).json({ error: 'Erro ao buscar usuários', details: error.message });
    }
  }

  static async findById(req: Request, res: Response) {
    const { id } = req.params;

    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ error: 'O id é obrigatório' });
    }

    try {
      const user = await User.findOneBy({ id: Number(id) });
      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
      return res.json(user);
    } catch (error:any) {
      return res.status(500).json({ error: 'Erro ao buscar usuário', details: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;

    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ error: 'O id é obrigatório' });
    }

    try {
      const user = await User.findOneBy({ id: Number(id) });
      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }

      await user.remove();
      return res.status(204).json();
    } catch (error:any) {
      return res.status(500).json({ error: 'Erro ao deletar usuário', details: error.message });
    }
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { email, name } = req.body;

    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ error: 'O id é obrigatório' });
    }

    try {
      const user = await User.findOneBy({ id: Number(id) });
      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }

      user.email = email;
      user.name = name;

      await user.save();
      return res.json(user);
    } catch (error:any) {
      return res.status(500).json({ error: 'Erro ao atualizar usuário', details: error.message });
    }
  }
}