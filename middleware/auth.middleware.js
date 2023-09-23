// importing all module-------->
const jwt = require("jsonwebtoken");
require("dotenv").config();


// auth middleware----->
const authMiddleware = (req,res,next)=>{
    const token = req.headers.authorization.split(' ')[1] || req.headers.authorization;
    if(token){
        const decoded = jwt.verify(token,process.env.JWT_LOGIN_SECRET)
        if(decoded){
            req.body.userId = decoded.userId;
            req.body.role = decoded.role;

            console.log(decoded.userId)
            next();
        }else{
            res.status(400).send({msg:"Please Login Fisrt!"})
        }
    }else{
        res.status(400).send({msg:"Please Login Fisrt!"})
    }
}

// export module----->
module.exports={
    authMiddleware
}