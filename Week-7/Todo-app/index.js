const {UserModel,TodoModel} = require('./db')
const auth = require('./auth')
const mongoose = require('mongoose');
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const {z} = require('zod')
const  JWT_SECRET = "ilovecoding";

mongoose.connect("mongodb+srv://sanjaybhandari1211:Bhandari%4012@cluster0.otn4gai.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

app.use(express.json());

app.get('/',(req,res)=>{
    console.log("hello")
})

const validationSchema = z.object({
    email:z.string().email({message:"Invalid Email Address"}).nonempty({message:"Email is required."}),
    password:z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long.' })
    .max(20, { message: 'Password must not exceed 20 characters.' }) 
    .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter.' })
    .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter.' })
    .regex(/\d/, { message: 'Password must contain at least one number.' })
    .regex(/[\W_]/, { message: 'Password must contain at least one special character.' }),
    // name:z.string().min(2,{message:"Name must be at least 2 characters long."}).nonempty({message:"Name is required."})
}) 

// const taskSchema = z.object({
//     task: z.string().nonempty({ message: 'Task is required.' }),
//     priority: z.string().nonempty({ message: 'Priority is required.' }),
//     // z.enum(['High', 'Medium', 'Low']).nonempty({ message: 'Priority is required.' }),
//     status: z.string().nonempty({ message: 'Status is required.' }),
//     // z.enum(['InProgress', 'Pending', 'Completed']).nonempty({ message: 'Status is required.' }),
//     deadline: z.string().nonempty({ message: 'Deadline is required.' }),
//     created_at: z.number().positive({ message: 'Timestamp must be a positive number.' }),
//     deleted: z.boolean(),
//   });

app.post('/signup',async (req,res)=>{
    try{
        const email = validationSchema.safeParse(req.body.email);
        const password = validationSchema.safeParse(req.body.password);
        // const name = validationSchema.safeParse(req.body.name);

        const userFound = UserModel.findOne({
            email,
            password
        });

        // console.log(userFound)

        if(userFound) return res.status(400).json({message:"User Already Exist. Please Login"});

        const newUser = await UserModel.create({
                email:email,
                password:password,
        });

        if(newUser) res.json({message:"You are logged in"})

    }catch(err){
        res.status(400).json({message:err.massage})
    }
})

app.post('/signin',async (req,res)=>{
    const email = validationSchema.safeParse(req.body.email);
    const password = validationSchema.safeParse(req.body.password);
    
    const userFound = await UserModel.findOne({
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
})

// app.use(auth())
app.post('/todo',auth,(req,res)=>{
    console.log('users');
})

// app.post('/todos',(req,res)=>{
    
// })

let PORT = 3000;
app.listen(PORT,()=>{
    console.log(`app is listen on port ${PORT}`)
})

