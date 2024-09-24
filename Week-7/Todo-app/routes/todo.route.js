const {Router} = require("express");

const todoRouter = Router();

todoRouter.post('/',(req,res)=>{
    res.json({message:"todos list"})
})
todoRouter.get('/:id',(req,res)=>{
    res.json({message:"todos by id"})
})
todoRouter.put('/:id',(req,res)=>{
    res.json({message:"todos list"})
})
todoRouter.delete('/:id',(req,res)=>{
    res.json({message:"todos list"})
})

module.exports=todoRouter;