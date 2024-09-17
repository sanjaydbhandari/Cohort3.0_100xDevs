const {UserModel,TodoModel} = require('./db')
const mongoose = require('mongoose');
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

mongoose.connect("")
app.use(express.json());

app.post('/signup',(req,res)=>{
    
})

app.post('/signin',(req,res)=>{

})

app.post('/todo',(req,res)=>{

})

app.post('/todos',(req,res)=>{

})

app.listen(PORT,()=>{
    console.log(`app is listen on port ${PORT}`)
})