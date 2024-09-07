import express from "express";
import fs from "fs";
import path from "path";

const app = express();
const todoFile = "./todos.json";

const readTodos = () => {
    let todos = fs.readFileSync(todoFile, "utf-8");
    return JSON.parse(todos);
};

const response = (status, data, message) => {
    return {
        status: status,
        data: data,
        message: message,
    };
};

app.get("/todos", (req, res) => {
    let todos = readTodos();
    res.json(todos);
});

app.get("/todos/:id", (req, res) => {
    try {
        let todos = readTodos();
        let todo = todos.find((todo) => todo.id === parseInt(req.params.id));
        if (!todo) res.status(400).send(response(400, null, "Todo not found"));
        res.status(200).send(response(200, todo, "Todo found"));
    } catch (err) {
        res.status(500).send(response(500, null, "Internal server error"));
    }
});

app.get("/todos/:id", (req, res) => {});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
