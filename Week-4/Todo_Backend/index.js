import express from "express"
import fs from 'fs'
import path from 'path'

const app = express();
const todoFile = "./todos.json";

const response = (status,message,data=null) => {
    return {
        "status":status,
        "message":message,
        "data":data
    }
}

const readTodos = () => {
    let todos = fs.readFileSync(todoFile, "utf-8");
    return JSON.parse(todos);
}

app.get('/todos',(req,res)=>{
    try{
        let todos = readTodos();
        if(!todos || todos.length === 0)
            res.send(response(400,"Data Not Found",todos));
        res.status(200).send(response(200,"Data Fetched Succussfully",todos));
    }catch(err){
        res.status(500).send({"status":500,"error":err.message});  
    }
});

app.get('/todos/:id',(req,res)=>{
    try{
        let todos = readTodos();
        if(!todos)
            res.status(400).send(response(400,"Data Not Found",todos));
        let todo = todos.find(todo => todo.id == parseInt(req.params.id));
        if(!todo)
            res.status(400).send(400,"Data Not Found",todo)
        res.status(200).send(response(200,"Data Fetched Succussfully",todo));
    }catch(err){
        res.status(500).send({"status":500,"error":err.message});  
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
