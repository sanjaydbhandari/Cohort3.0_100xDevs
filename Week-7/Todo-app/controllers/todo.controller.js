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
            // createdAt : Date.now(),
            deleted: false
        });

        if(!newTodo)
            res.status(400).json({"message":"Failed to insert Todo"})
        res.json({message:"Todo inserted Succussfully"})           
    }catch(err){
        res.status(400).json({"message":err.message})           
    }
}

module.exports = {insertTodo}