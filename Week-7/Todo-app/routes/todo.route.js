const {Router} = require("express");
const {auth} = require('../middleware/auth')
const {insertTodo,fetchTodoById,updateTodo} = require('../controllers/todo.controller')
const todoRouter = Router();
todoRouter.get('/',auth,insertTodo)
todoRouter.get('/:id',fetchTodoById)
todoRouter.put('/:id',updateTodo)
todoRouter.delete('/:id',(req,res)=>{
    res.json({message:"todos list"})
})

module.exports={todoRouter};