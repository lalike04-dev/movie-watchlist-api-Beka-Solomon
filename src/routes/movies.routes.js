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

router.get("/:id", (req, res) => {
  const found = movies.find((movie) => movie.id == req.params.id);
  if (found === undefined || found==null) {
    return res.json({
      message: "enter a valid id please!",
    });
  } 
  res.json(found)
  
});

router.post("/",requrieapikey,validatemovie,(req,res)=>{
    if(req.body!=null || req.body!=undefined){const {id,name,genre, watched,rating}=req.body
    if(movies.find(movie=>movie.id==id))
        return res.json({
    message:"ID already exists, please try again with other id"
    })
    movies.push({id:id,
        name:name,
        genre:genre,
        watched:watched,
        rating:rating})
    res.status(201).json(movies)}
})

