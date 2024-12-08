import pool from '../config/db';
import { User } from '../models/user';

export const getAllUsers = async (): Promise<User[]> => {
  const [rows] = await pool.query('SELECT * FROM users');
  return rows as User[];
};

export const getUserById = async (id: number): Promise<User | null> => {
  const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
  return (rows as User[])[0] || null;
};

export const createUser = async (user: User): Promise<number> => {
  const { name, email, password } = user;
  const [result] = await pool.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password]);
  return (result as any).insertId;
};

export const updateUser = async (id: number, user: Partial<User>): Promise<void> => {
  const { name, email, password } = user;
  await pool.query('UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?', [name, email, password, id]);
};

export const deleteUser = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM users WHERE id = ?', [id]);
};
