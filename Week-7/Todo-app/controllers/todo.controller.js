const {todoModel} = require('../models/todo.model');
const {todoSchema} = require('../middleware/validation');

const insertTodo = (req,res) =>{
    const token = req.headers.token;
    console.log(token)
    // const validationResult = todoSchema.safeParse(req.body);
    // if(!validationResult.succuss)
    //     return res.status(400).json({error:validationResult.error.format()})
    // const {task,priority,status,deadline}=validationResult.data;
    // const newTodo = await todoModel.create({

    // });

}