export function queryValidation (){
    const category = req.query;
    const {user} = res.locals;
    if(category){
        res.locals.category = category;
    }
}