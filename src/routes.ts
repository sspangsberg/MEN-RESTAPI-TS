import express, { Express, Request, Response } from "express";

/**
 * Adds routes to the specified Express app
 * @param app 
 */
function routes(app: Express) {
    // default health check 
    app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));
}

export default routes;