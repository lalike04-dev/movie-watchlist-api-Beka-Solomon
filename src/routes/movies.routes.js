import express from "express";
import movies from "../data/movies.js";
import { validatemovie } from "../middleware/validatemovie.js";
import { requrieapikey } from "../middleware/requireApikey.js";

export const router = express.Router();

router.get("/", (req, res) => {
  if(req.query.genre!=undefined && req.query.watched!=undefined){
    const movie=movies.filter(mov=>mov.genre==req.query.genre).filter(mo=>String(mo.watched)==req.query.watched)
    return res.status(200).json(movie)
  }
  else if(req.query.genre!=undefined){
    const movie=movies.filter(mov=>mov.genre==req.query.genre)
    return res.status(200).json(movie)
  }
  else if(req.query.watched!=undefined){
    const movie=movies.filter(mo=>String(mo.watched)==req.query.watched)
    return res.status(200).json(movie)
  }
  res.status(200).json(movies);
  
  
});

