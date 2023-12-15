import express, { Application } from "express";
import health_route from "./routes/health";

export default function createServer(): Application {
    const app: Application = express();
    app.use(express.json());
    app.use("/", health_route);

    const port: number = Number(String(process.env.PORT)) || 4000;

    app.listen(port, () => {
        console.log(`Server running on ${port}`);
    });

    return app;
}