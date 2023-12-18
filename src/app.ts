//import express, { Request, Response } from "express";
import dotenv from "dotenv";
import createServer from "./utils/server";
import connectToDB from "./utils/DBManager";

// setup dot env, so we can load environment variables
dotenv.config();

const port = parseInt(process.env.PORT as string) || 4000;
const app = createServer();

    /**
     * 
     */
    app.listen(port, async () => {
        await connectToDB();
    });