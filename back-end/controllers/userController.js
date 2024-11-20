import * as userService from '../services/userService.js';

export const getAllUser = async (req, res) => {
  try {
    const users = await userService.getAllUser();
    return res.json(users);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await userService.getUser(req.params.id);
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }
    return res.json(user);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    return res.json(user);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }
    return res.json(user);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await userService.deleteUser(req.params.id);
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }
    res.json({ message: 'User is deleted' });
  } catch (error) {
    return res.status(500).send(error);
  }
};
