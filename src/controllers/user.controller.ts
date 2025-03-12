import { Request, Response } from "express";
import { users } from "../data/users.data";

export const getUsers = (req: Request, res: Response) => {
    res.json(users);
  };
  
  export const getUserById = (req: Request, res: Response) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    user ? res.json(user) : res.status(404).json({ error: "User not found" });
  };
  
  export const createUser = (req: Request, res: Response) => {
    const newUser = { id: users.length + 1, ...req.body };
    users.push(newUser);
    res.status(201).json(newUser);
  };
  
  export const updateUser = (req: Request, res: Response) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...req.body };
      res.json(users[userIndex]);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  };
  
  export const deleteUser = (req: Request, res: Response) => {
    const index = users.findIndex(u => u.id === parseInt(req.params.id));
    if (index !== -1) {
      users.splice(index, 1);
      res.json({ message: "User deleted" });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  };