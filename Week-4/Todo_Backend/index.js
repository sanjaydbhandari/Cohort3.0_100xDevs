import express from "express"
import fs from 'fs'
import path from 'path'

const app = express();
const todoFile = "./todos.json";

const response = (status,message,data=[]) => {
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
        if(!todos)
            res.send(response(200,"Data Fetch Succussfully",todos));
        else
            res.send(response(400,"Data Not Found",todos));
    }catch(err){
        res.send({"status":500,"error":err});
    }
})

app.get('/todos:id',(req,res)=>{
    console.log(req);
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
