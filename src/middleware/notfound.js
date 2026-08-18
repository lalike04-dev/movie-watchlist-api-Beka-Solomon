export function notfound(req,res){
    if(req.path!="api/movies/."){
        return res.status(404).json({message:"Route not found"})
    }
}