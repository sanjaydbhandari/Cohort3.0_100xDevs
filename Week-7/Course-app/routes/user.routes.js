const { Router } = require("express");
const userRouter = Router();
const { signUp, signIn } = require("../controllers/user.controller");

userRouter.get("/signup", signUp);
userRouter.get("/signin", signIn);

module.exports = { userRouter };
