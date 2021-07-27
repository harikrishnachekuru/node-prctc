const express = require('express');

const router = express.Router()

router.post('/login',(req, res)=>{
    //console.log(req.body);
    //Example way to validate the user login is successful/empty data
    const {name} = req.body;
    if(name) {
        return res.status(200).json({success: true, msg : `Welcome back ${name} ..!`});
    }

    res.status(401).send("PLease provide valid credentials")
})

module.exports = router;
