const {Router} = require(express);

const userRouter = Router();

userRouter.post('/signup',(req,res)=>{
    res.json({message:"signup"})
})

userRouter.post('/signin',(req,res)=>{
    res.json({message:"signup"})
})

userRouter.post('/todos',(req,res)=>{
    res.json({message:"todos list"})
})

module.exports=userRouter;