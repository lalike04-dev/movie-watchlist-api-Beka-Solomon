export function requrieapikey(req,res,next){
    if(!req.headers['x-api-key']){
        return res.status(403).json({message:"You need to have an api key!"})
    }
    if(req.headers['x-api-key']!="movie-class-2026" && req.headers['x-api-key']!=undefined)
    {
        return res.status(403).json({message:"Entry forbidden!"})
    }
    next()
}