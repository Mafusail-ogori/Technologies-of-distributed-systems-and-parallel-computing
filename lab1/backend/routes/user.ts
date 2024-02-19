import express, { Router } from "express";

const router = Router();

router.post(
  "/",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(req.body);
  }
);

export default router;
