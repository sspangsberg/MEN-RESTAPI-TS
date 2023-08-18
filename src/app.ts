import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser"

const app: Application = express();
const port: number = 4000 || process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Health check route...
app.get("/healthcheck", (req: Request, res: Response, next: NextFunction) => {
    res.send("I'm alive!");
});

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});