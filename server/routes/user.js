import express from 'express';
import { getAllUsers, updateUserRole } from '../controllers/user.controllers.js';

const router = express.Router();

router.get('/allUsers', getAllUsers);
router.put('/updateUserRole/:id', updateUserRole);

export default router;
