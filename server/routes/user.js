import express from 'express';
import { getAllUsers, deleteUser } from '../controllers/user.controllers.js';

const router = express.Router();

router.get('/allUsers', getAllUsers);
router.delete('/deleteUser/:id', deleteUser);

export default router;
