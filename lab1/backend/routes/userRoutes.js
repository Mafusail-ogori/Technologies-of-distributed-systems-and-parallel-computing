import express from "express";
import userController from "../controller/userController.js";
import multer from "multer";

const upload = multer();

const userRouter = express.Router();

userRouter.post("/auto", userController.calculateUserAuto);

userRouter.post("/manual", userController.calculateUserManual);

userRouter.post(
  "/file",
  upload.single("file"),
  userController.calculateUserFile
);

export default userRouter;
