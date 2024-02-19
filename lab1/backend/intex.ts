import express from "express";
import userRouter from "./routes/user";

const app: express.Application = express();

const user = app.use();
