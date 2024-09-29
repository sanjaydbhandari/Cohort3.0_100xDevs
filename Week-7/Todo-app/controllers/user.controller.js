const { PORT,DB_URL,JWT_SECRET } = require('../config/config')
const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken');
const {userSchema} = require('../middleware/validation')
const bcrypt = require('bcrypt'); 

const signUp = async (req,res)=>{
    try{
        const validationResult = userSchema.safeParse(req.body);

        if(!validationResult.success)
            return res.status(400).json({error:validationResult.error.format()})

        const {email,password}=validationResult.data;
        const hashPassword = await bcrypt.hash(password,10);
        const user = await userModel.findOne({
            email
        });

        if(user) return res.status(400).json({"message":"User Already Exist. Please Login"});

        const newUser = await userModel.create({
                email:email,
                password:hashPassword
        });

        if(newUser) res.json({message:"You have successfully signed up!"})

    }catch(err){
        res.status(400).json({"message":err.message})           
    }
}

const signIn = async (req,res)=>{
    try{
        const validationResult = userSchema.safeParse(req.body);
        
        if(!validationResult.success)
            return res.status(400).json({error:validationResult.error.format()})

        const {email,password}=validationResult.data;
        const user = await userModel.findOne({
            email
        });
        
        if(!user)
            return res.status(403).json({"message":"Invalid Username!"})

        const passwordMatch = await bcrypt.compare(password,user.password);

        if(!passwordMatch)
            return res.status(403).json({"message":"Invalid Password!"})

        const token = jwt.sign({
            id:user._id.toString()
        },JWT_SECRET)

        return res.json({token})

    }catch(err){
        return res.status(400).json({"message":err.message})           
    }
}

module.exports={
    signUp,signIn
}