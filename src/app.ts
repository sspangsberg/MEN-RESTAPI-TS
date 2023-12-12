import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

// setup dot env, so we can load environment variables
dotenv.config();

const app: Application = express();
const port: number = Number(String(process.env.PORT)) || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Health check route...
app.get("/healthcheck", (req: Request, res: Response, next: NextFunction) => {
    res.send("I'm alive!");
});

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});