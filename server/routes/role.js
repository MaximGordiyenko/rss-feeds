import express from 'express';
import { updateUserRoleById } from "../controllers/role.controllers.js";

const router = express.Router();

router.put('/updateUserRole/:id', updateUserRoleById);

export default router;
