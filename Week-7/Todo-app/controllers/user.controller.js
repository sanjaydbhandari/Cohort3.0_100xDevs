const { PORT,DB_URL,JWT_SECRET } = require('../config/config')
const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken');
const {userSchema} = require('../middleware/validation')

const signUp = async (req,res)=>{
    try{
        const validationResult = userSchema.safeParse(req.body);
        // const name = validationSchema.safeParse(req.body.name);

        if(!validationResult.success)
            return res.status(400).json({error:validationResult.error.format()})

        const {email,password}=validationResult.data;
        console.log(email,password)

        const userFound = await userModel.findOne({
            email,
            password
        });

        if(userFound) return res.status(400).json({"message":"User Already Exist. Please Login"});

        const newUser = await userModel.create({
                email,
                password,
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