import express from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import feedRouter from './routes/feeds.js';
import authRouter from './routes/auth.js';
import userRouter from './routes/user.js';
import { createDatabaseIfNotExists } from "./db.js";

const PORT = process.env.NODE_LOCAL_PORT || 4000;
const app = express();

dotenv.config();

app.listen(PORT, async () => {
  try {
    await createDatabaseIfNotExists();
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error('Error starting the server:', error);
  }
});

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(cookieParser());

app.use(authRouter);
app.use(userRouter);
app.use(feedRouter)
