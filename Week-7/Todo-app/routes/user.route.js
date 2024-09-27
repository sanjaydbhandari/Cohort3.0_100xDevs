const {Router} = require("express");
const {signUp,signIn}= require("../controllers/user.controller");
const {auth} = require('../middleware/auth');

const userRouter = Router();
userRouter.post('/signup',signUp)
userRouter.post('/signin',auth,signIn)

module.exports={userRouter};