import express from 'express';
import { getAllUsers, updateUserRole, deleteUser } from '../controllers/user.controllers.js';

const router = express.Router();

router.get('/allUsers', getAllUsers);
router.put('/updateUserRole/:id', updateUserRole);
router.delete('/deleteUser/:id', deleteUser);

export default router;
