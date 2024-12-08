import { Request, Response } from 'express';
import * as userService from '../services/userServices';

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve users' });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserById(Number(req.params.id));
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve user' });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const id = await userService.createUser(req.body);
    res.status(201).json({ id });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create user' });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    await userService.updateUser(Number(req.params.id), req.body);
    res.json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update user' });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    await userService.deleteUser(Number(req.params.id));
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete user' });
  }
};
