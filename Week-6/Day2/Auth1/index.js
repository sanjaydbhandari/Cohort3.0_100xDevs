const express = require('express')
const jwt = require('jsonwebtoken')
const app = express();

app.use(express.json())
let users=[];
const SECRET_KEY = "ilovecoding";

app.post('/signup',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const userFound = users.find(user=>user.username == username);
    if(userFound)
        return res.status(400).json({status:400,message:"Username already Exist!"})

    if(username && password){
        users.push({
            username,
            password
        });
        return res.status(200).json({status:200,message:"User Signup Succussfully!"})
    }
    else
    return res.status(400).json({status:400,message:"Invalid username and password!"})
});

app.post('/signin',(req,res)=>{
    let userFound = users.find(user=>user.username==req.body.username && user.password==req.body.password);
    if(userFound){
        let token = jwt.sign({
            "username": userFound.username,
        },SECRET_KEY);
        return res.status(200).json({status:200,message:"Signin succussfully!",token})
    }else
    return res.status(400).json({status:400,message:"Invalid username and password!"})
})

app.post('/courses',(res,req)=>{
    let authenticatedUser = jwt.verify(req.headers.token,SECRET_KEY);
    console.log(authenticatedUser)
    if(authenticatedUser)
        return res.status(200).json({status:200,message:"Authenticated User!",courses:[]})
    return res.status(400).json({status:400,message:"unAuthenticated User!"})
})

app.listen(3000)
