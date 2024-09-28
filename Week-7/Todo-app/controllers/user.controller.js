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
            "message":"Invalid Creds"
        })
    }
}

module.exports={
    signUp,signIn
}