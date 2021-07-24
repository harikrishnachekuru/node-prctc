//Instead of declaring in every file of missle we can directly import the middleware and use what ever needed.

const logger = (req, res, next) =>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getDate();
    console.log(method,url,time);
    next();
}
module.exports = logger;