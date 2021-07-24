const exampAuthorize = (req, res,next) => {
    //Here creating a query selector and example validation for user seaching functionality 
    // As it simple example which works as with authorize/unauthorize.

    const {user} = req.query;

    if(user === 'john') {
        req.user = {name: 'john', id: 12};
        //Definitely need to have next method after the above to proceed for further operation.
        next();
    }else {
        //res.status(401).send({message:"You are Unauthorized to access this page"})
        res.status(401).send("Unauthorized")
    }
}

module.exports = exampAuthorize;