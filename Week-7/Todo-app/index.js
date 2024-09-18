const {UserModel,TodoModel} = require('./db')
const {auth,JWT_SECRET} = require('./auth')
const mongoose = require('mongoose');
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const z = require('zod')

mongoose.connect("mongodb+srv://sanjaybhandari1211:Bhandari%4012@cluster0.otn4gai.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

app.use(express.json());

app.post('/signup',async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email:email,
        password:password,
        name:name
    })

    res.json({
        message:"You are logged in"
    })
    
})

app.post('/signin',async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    
    const response = await UserModel.findOne({
        email:email,
        password:password,
    });
    
    console.log(response)
    if(response){
        const token = jwt.sign({
            id:response._id.toString()
        })

        res.json({token})
    }else{
        res.status(403).json({
            message:"Invalid Creds"
        })
    }
})

app.use(auth)
app.post('/todo',(req,res)=>{
    console.log('users');

})

app.post('/todos',(req,res)=>{

})

let PORT = 3000;
app.listen(PORT,()=>{
    console.log(`app is listen on port ${PORT}`)
})

