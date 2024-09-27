import { Request, Response } from "express";
import { UserService } from "../services/userService";

export class UserController {
  static async getAllUsers(req: Request, res: Response) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: "Error fetching users", error });
    }
  }

  static async getUserById(req: Request, res: Response) {
    try {
      const user = await UserService.getUserById(req.params.id);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error fetching user", error });
    }
  }

  static async createUser(req: Request, res: Response) {
    try {
      const savedUser = await UserService.createUser(req.body);
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(400).json({ message: "Error creating user", error });
    }
  }

  static async updateUser(req: Request, res: Response) {
    try {
      const updatedUser = await UserService.updateUser(req.params.id, req.body);
      if (updatedUser) {
        res.json(updatedUser);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      res.status(400).json({ message: "Error updating user", error });
    }
  }

  static async deleteUser(req: Request, res: Response) {
    try {
      await UserService.deleteUser(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Error deleting user", error });
    }
  }
}
