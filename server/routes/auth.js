import express from "express";
const router = express.Router();

import { register, login } from "../controllers/auth.controllers.js";
import { checkUser } from "../middlewares/auth.middleware.js";

router.post("/", checkUser);
router.post("/register", register);
router.post("/login", login);

export default router;
