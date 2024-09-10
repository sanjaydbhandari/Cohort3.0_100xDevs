import express from "express"
import fs, { read, stat } from 'fs'
import path from 'path'

const app = express();
app.use(express.json());

const TODOFILE = "./todos.json";

const response = (status,message,data=null) => {
    let res = {
        "status":status,
        "message":message,
    }
    if(!data)
        return res;
    res.data = data;
    return res;
}

const readTodos = () => {
    try{
        let todos = fs.readFileSync(TODOFILE, "utf-8");
        return JSON.parse(todos);
    }catch(err){
        return [];
    }
}

const writeTodos = (todos) => {
    try{
        fs.writeFileSync(TODOFILE,JSON.stringify(todos,null,2));
    }catch(err){
        throw err;
    }
} 

app.get('/todos',(req,res)=>{
    try{
        let todos = readTodos();
        todos = todos.filter(todo=>todo.deleted==false)
        if(!todos || todos.length === 0)
            return res.json(response(400,"Data Not Found",todos));
        return res.status(200).json(response(200,"Data Fetched Succussfully",todos));
    }catch(err){
        return res.status(500).json({"status":500,"error":err.message});  
    }
});

app.get('/todos/:id',(req,res)=>{
    try{
        let todos = readTodos();
        let todo = todos.find(todo => todo.id == parseInt(req.params.id) && todo.deleted==false);
        if(!todo)
            return res.status(400).json(response(400,`Invalid Id ${req.params.id}! Todo Not Found`));

        return res.status(200).json(response(200,"Data Fetched Succussfully",todo));
    }catch(err){
        return res.status(500).json({"status":500,"error":err.message});  
    }
});

app.get('/filterTodo',(req,res)=>{
    try{
        let todos = readTodos();
        let todo = todos.filter(todo => todo.status == req.body.status && todo.priority == req.body.priority && todo.deleted==false);
        if(!todo)
            return res.status(400).json(response(400,`Invalid Id ${req.params.id}! Todo Not Found`));
        return res.status(200).json(response(200,"Data Fetched Succussfully",todo));
    }catch(err){
        return res.status(500).json({"status":500,"error":err.message});  
    }
});

app.post('/todos',(req,res)=>{
    try{
        let todos = readTodos();
        let newTodo = {
            "id": todos.length + 1,
            "task":req.body.task,
            "priority":req.body.priority,
            "status":req.body.status,
            "deadline": req.body.deadline,
            "created_at": req.body.created_at,
            "updated_at": null,
            "deleted": false
        }
        todos.push(newTodo)
        writeTodos(todos);
        return res.status(200).json(response(200,"Todo Added Succussfully",newTodo))
    }catch(err){
        return res.status(500).json({"status":500,"message":err.message})
    }
});

app.put('/todos/:id',(req,res)=>{
    try{
        let todos = readTodos();
        let index = todos.findIndex(todo=>(todo.id===parseInt(req.params.id) && todo.deleted == false))
        if(index === -1)
            return res.status(400).json(response(400,`Invalid Id ${req.params.id}! Todo Not Found`));
        todos[index].task = req.body.task;
        todos[index].priority = req.body.priority;
        todos[index].status = req.body.status;
        todos[index].deadline = req.body.deadline;
        todos[index].updated_at = req.body.updated_at;
        todos[index].deleted = req.body.deleted;
        writeTodos(todos);
        return res.status(200).json(response(200,"Todo Edited Succussfully",todos[index]))
    }catch(err){
        return res.status(500).json({"status":500,"message":err.message})
    }
});

app.delete('/todos/:id',(req,res)=>{
    try{
        let todos = readTodos();
        let index = todos.findIndex(todo=>(todo.id===parseInt(req.params.id) && todo.deleted == false))
        if(index === -1)
            return res.status(400).json(response(400,`Invalid Id ${req.params.id}! Todo Not Found`));
        todos[index].deleted = true;
        writeTodos(todos);
        return res.status(200).json(response(200,"Todo Deleted Succussfully",todos[index]))
    }catch(err){
        return res.status(500).json({"status":500,"message":err.message})
    }
});

app.delete('/deleteTodo/:id',(req,res)=>{
    try{
        let todos = readTodos();
        let index = todos.findIndex(todo => todo.id === parseInt(req.params.id))
        if(index == -1)
            return res.status(400).json(response(400,`Invalid Id ${req.params.id}! Todo Not Found`));
        todos.splice(index,1);
        writeTodos(todos)
        return res.status(200).json(response(200,`Todo Deleted Succussfully!`))
    }catch(err){
        return res.status(500).json({"status":500,"message":err.message});
    }
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
