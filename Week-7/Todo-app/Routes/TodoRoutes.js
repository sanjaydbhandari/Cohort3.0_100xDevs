const {Router} = require(express);

const todoRouter = Router();

todoRouter.post('/todos',(req,res)=>{
    res.json({message:"todos list"})
})
todoRouter.get('/todos/:id',(req,res)=>{
    res.json({message:"todos by id"})
})
todoRouter.put('/todos/:id',(req,res)=>{
    res.json({message:"todos list"})
})
todoRouter.delete('/todos/:id',(req,res)=>{
    res.json({message:"todos list"})
})

module.exports=todoRouter;