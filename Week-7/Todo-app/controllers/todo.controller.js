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
            return res.status(400).json({"message":"Failed to insert Todo"})
        return res.status(200).json({message:"Todo inserted Succussfully"})           
    }catch(err){
        return res.status(400).json({"message":err.message})           
    }
}

const updateTodo = async (req,res) =>{
    try{
        const userId = req.userId;
        const {id} = req.params;
        const validationResult = taskSchema.safeParse(req.body)
        if(!validationResult.success)
            return res.status(400).json({"error":validationResult.error.format()})
        console.log(validationResult.data);
        const updatedTodo = await todoModel.updateOne({userId,_id:id,deleted:false},{$set:validationResult.data});
        if(updatedTodo.matchedCount === 0)
            return res.status(404).json({ "message": "Todo not found" });
        if(updatedTodo.modifiedCount === 0)
            return res.status(400).json({ "message": "Failed to update Todo" });
        return res.status(200).json({"message":"Todo updated successfully"})   
    }catch(err){
        return res.status(400).json({"message":err.message})           
    }
}

const deleteTodo = async (req,res) =>{
    try{
        const userId = req.userId;
        const {id} = req.params;
        const updatedTodo = await todoModel.updateOne({userId,_id:id,deleted:false},{$set:{deleted:true}});
        if(updatedTodo.matchedCount === 0)
            return res.status(404).json({ "message": "Todo not found" });
        if(updatedTodo.modifiedCount === 0)
            return res.status(400).json({ "message": "Failed to delete Todo" });
        return res.status(200).json({"message":"Todo deleted successfully"})   
    }catch(err){
        return res.status(400).json({"message":err.message})           
    }
}

const fetchTodoById = async (req,res) =>{
    try{
        const userId = req.userId;
        const {id} = req.params;
        let todo = await todoModel.findOne({_id :id,userId,deleted:false});
        if(!todo)
            return res.status(404).json({message:"Todo not found"})           
        return res.status(200).json({message:"Todo fetch Succussfully",data:todo})           
    }catch(err){
        return res.status(400).json({"message":err.message})           
    }
}

const fetchTodos = async (req,res) =>{
    try{
        const userId = req.userId;
        let todo = await todoModel.find({userId:userId,deleted:false});
        if(!todo)
            todo=[];
        return res.status(200).json({message:"All Todo fetch Succussfully",data:todo})           
    }catch(err){
        return res.status(400).json({"message":err.message})           
    }
}
module.exports = {insertTodo,updateTodo,deleteTodo,fetchTodoById,fetchTodos}