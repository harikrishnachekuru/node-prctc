// Async middleware is created to avoid the redunduncy for the asynchronous function of avoiding the try and catch methods...

const asyncWrapper = (fn) =>{
    //returning the another function of async under params of req,res,next
    return async (req,res,next) => {
        try {
            await fn(req,res,next)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = asyncWrapper;