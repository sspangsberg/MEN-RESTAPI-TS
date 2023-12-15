import express, { Application } from "express";
import routes from "../routes";

export default function createServer(): Application {
    const app = express();
    app.use(express.json());
    routes(app);

    const port: number = Number(String(process.env.PORT)) || 4000;

    app.listen(port, () => {
        console.log(`Server running on ${port}`);
    });

    return app;
}