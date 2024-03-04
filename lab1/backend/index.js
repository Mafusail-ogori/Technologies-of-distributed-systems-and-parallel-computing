import express from "express";
import cors from "cors";
import userRouter from "./routes/userRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/user", userRouter);
const port = process.env.port || 8080;

app.listen(port, () => console.log(`server started on port ${port}`));
