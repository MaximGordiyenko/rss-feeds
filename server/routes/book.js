import express from 'express';
import { getAllBooks } from "../controllers/book.controllers.js";

const router = express.Router();

router.get('/allBooks', getAllBooks);

export default router;
