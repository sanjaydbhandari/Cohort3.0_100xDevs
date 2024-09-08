import express from "express"
import fs from 'fs'
import path from 'path'

const app = express();
const todoFile = "./todos.json";

const readTodos = () => {
    let todos = fs.readFileSync(todoFile, "utf-8");
    return JSON.parse(todos);
}

app.get('/todos',(req,res)=>{
    let todos = readTodos()
    res.json(todos)
})

app.get('/todos:id',(req,res)=>{
    console.log(req);
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
