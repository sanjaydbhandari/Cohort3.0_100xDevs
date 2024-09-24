const {Router} = require("express");

const userRouter = Router();

userRouter.post('/signup',(req,res)=>{
    res.json({message:"signup"})
})

userRouter.post('/signin',(req,res)=>{
    res.json({message:"signup"})
})

module.exports=userRouter;