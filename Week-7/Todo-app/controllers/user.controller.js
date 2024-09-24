const { PORT,DB_URL,JWT_SECRET } = require('./config/config')
const todoModel = require('./models/todo.model')
const userModel = require('./models/user.model')
const jwt = require('jsonwebtoken');
// const mongoose = require('mongoose');
const signupValidation = require('../middleware/validation')

const signUp = async (req,res)=>{
    try{
        const email = signupValidation.safeParse(req.body.email);
        const password = signupValidation.safeParse(req.body.password);
        // const name = validationSchema.safeParse(req.body.name);

        const userFound = userModel.findOne({
            email,
            password
        });

        // console.log(userFound)

        if(userFound) return res.status(400).json({message:"User Already Exist. Please Login"});

        const newUser = await userModel.create({
                email:email,
                password:password,
        });

        if(newUser) res.json({message:"You are logged in"})

    }catch(err){
        res.status(400).json({message:err.massage})
    }
}

const signIn = async (req,res)=>{
    const email = signupValidation.safeParse(req.body.email);
    const password = signupValidation.safeParse(req.body.password);
    
    const userFound = await userModel.findOne({
        email: email,
        password: password,
    });
    
    // console.log(response)
    if(userFound){
        const token = jwt.sign({
            id:userFound._id.toString()
        },JWT_SECRET)

        res.json({token})
    }else{
        res.status(403).json({
            message:"Invalid Creds"
        })
    }
}