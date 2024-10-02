const {Router} = require("express");
const {auth} = require('../middleware/auth')
const {insertTodo,fetchTodoById,updateTodo,deleteTodo,fetchTodos} = require('../controllers/todo.controller')
const todoRouter = Router();
todoRouter.get('/addTodo',auth,insertTodo)
todoRouter.get('/fetchTodo/:id',auth,fetchTodoById)
todoRouter.get('/fetchTodos',auth,fetchTodos)
todoRouter.put('/updateTodo/:id',auth,updateTodo)
todoRouter.delete('/deleteTodo/:id',auth,deleteTodo)

module.exports={todoRouter};