//import express, { Request, Response } from "express";
import dotenv from "dotenv";
import createServer from "./utils/server";

// setup dot env, so we can load environment variables
dotenv.config();

const app = createServer();