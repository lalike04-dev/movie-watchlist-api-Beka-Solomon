export function validatemovie(req,res,next){
    try{
        if(!req.body){
            return res.status(400).json({
            message:"Input is needed!!"
        })
        }
        else if(req.body.name==undefined || req.body.name==null){
            return res.status(400).json({
            message:"please enter the title!"
        })
        }
        else if(typeof req.body.name!== "string"){
            return res.status(400).json({
            message:"please enter a valid title!"
        })
        }
        else if(req.body.name.includes("  ") || req.body.name==""){
            return res.status(400).json({
            message:"please enter a valid title of movie!"
        })
        }
        else if(req.body.genre==undefined){
            return res.status(400).json({
            message:"please enter a genre!"
        })
        }
        else if(typeof req.body.genre !== "string"){
            return res.status(400).json({
            message:"please enter a valid genre!"
        })
        }
        else if(req.body.genre.includes("  ") || req.body.genre==""){
            return res.status(400).json({
            message:"please enter a valid genre!"
        })
        }
        else if(typeof req.body.watched !=="boolean" && req.body.watched!=undefined){
            return res.status(400).json({
            message:"please answer with true or false!"
        })
        }
        else if((req.body.rating!=undefined && req.body.rating>5) || (req.body.rating!=undefined && req.body.rating<0)){
            return res.status(400).json({
            message:"please enter a valid rating!"
        })
        }
        next();

    }
    catch(error){
        if(error.status==400 && error.name === 'SyntaxError')
        {return res.status(400).json({
            message:"please enter a valid json format for your input!"
        })}
    }
    }

