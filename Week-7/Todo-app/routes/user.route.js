const {Router} = require("express");
const {signUp,signIn}= require("../controllers/user.controller");

const userRouter = Router();

userRouter.post('/signup',signUp)

userRouter.post('/signin',signIn)

module.exports={userRouter:userRouter};