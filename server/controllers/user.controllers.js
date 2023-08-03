import { User } from "../repos/user.js";

export const getAllUsers = async (req, res) => {
  const users = await User.queryAllUsers();
  if (!users) return res.status(204).json({ 'message': 'No users found' });
  res.json(users);
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.deleteUser(id);
  if (!user) return res.status(204).json({ 'message': 'No user found' });
  res.json(user);
};
