import movies from "./data/movies.js"
import express from "express"
import {router} from "./routes/movies.routes.js";
import { notfound } from "./middleware/notfound.js";
import { logger } from "./middleware/request-logger.js";

const server=express();

server.use(express.json());

server.use((err, req, res, next) => {
  if (err.name === 'SyntaxError') {
    return res.status(400).json({ message: "Invalid JSON format, please check your data" });
  }
  next(err);
});