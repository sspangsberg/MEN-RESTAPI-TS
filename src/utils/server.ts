import express, { Application } from "express";
import routes from "../routes";

export default function createServer(): Application {
    const app = express();
    app.use(express.json());
    routes(app);

    return app;
}