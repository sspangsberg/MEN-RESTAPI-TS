import express, { Express, Request, Response } from "express";
const router = express.Router();

router.get("/healthcheck", (req: Request, res: Response) => {
    res.status(200).send("I'm alive!");
});

export default router;