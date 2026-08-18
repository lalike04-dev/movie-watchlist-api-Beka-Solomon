import movies from "./data/movies.js"
import express from "express"
import {router} from "./routes/movies.routes.js";
import { notfound } from "./middleware/notfound.js";
import { logger } from "./middleware/request-logger.js";