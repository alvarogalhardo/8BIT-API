export function queryValidation (req,res,next){
    const category = req.query;
    if(category){
        res.locals.category = category;
    } 
    next();
}

export function adminValidation (req,res,next){
    const {user} = res.locals;
    if(!user.isAdmin){
        res.sendStatus(401)
    }
    next();
}