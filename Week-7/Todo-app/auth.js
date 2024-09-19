const jwt = require("jsonwebtoken")
const  JWT_SECRET = "ilovecoding";

function auth(req,res,next){
    const token = req.headers.Authorization;

    const response = jwt.verify(token,JWT_SECRET);

    if(response){
        req.userId = response.userId;
        next();
    }else{
        res.status(403).json({
            message:"Invalid Token"
        })
    }
}

module.exports=auth;