const {todoModel} = require('../models/todo.model');
const {taskSchema} = require('../middleware/validation')

const insertTodo = async (req,res) => {
    try{
        const userId = req.userId;
        const validationResult = taskSchema.safeParse(req.body)
        if(!validationResult.success)
            return res.status(400).json({"error":validationResult.error.format()})
        const {task,priority,status,deadline} = validationResult.data;

        const newTodo = await todoModel.create({
            userId,
            task,
            priority,
            status,
            deadline,
            deleted: false
        });

        if(!newTodo)
            res.status(400).json({"message":"Failed to insert Todo"})
        res.status(200).json({message:"Todo inserted Succussfully"})           
    }catch(err){
        res.status(400).json({"message":err.message})           
    }
}

const updateTodo = async (req,res) =>{
    try{
        const userId = req.userId;
        const validationResult = todoModel.safeParse(req.body)
        if(!validationResult.success)
            return res.status(400).json({"error":validationResult.error.format()})
        console.log(validationResult.data);
        // const updatedTodo = await taskSchema.findOneAndUpdate({userId,})
    }catch(err){
        res.status(400).json({"message":err.message})           
    }
}

const fetchTodoById = async (req,res) =>{
    try{
        const userId = req.userId;
        const _id = req.params.id;
        const todo =await todoModel.findOne({_id:_id});
        if(!todo)
            todo=[];
        res.status(200).json({message:"Todo fetch Succussfully",data:todo})           
    }catch(err){
        res.status(400).json({"message":err.message})           
    }
}
module.exports = {insertTodo,updateTodo,fetchTodoById}