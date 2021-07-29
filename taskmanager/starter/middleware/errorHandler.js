// This is the middleware create for error handling with custom type.
//To do so, he we need to pass 4 parameters as err will be first then req,res,next.
const errorHandlerMiddleware = (err, req, res,next)=>{
    console.log(err)
    return res.status(err.status).json({msg : error.message});
}

module.exports = errorHandlerMiddleware;