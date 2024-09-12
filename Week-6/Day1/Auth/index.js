const express = require('express')
const app = express();

app.use(express.json())

var users=[];

function generateToken(){
    
}

app.post("/signup",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    let userFound = users.find((users)=>users.username == username);
    if(userFound) return res.status(400).json({ status: 400, message: "Username already exist!" })
    if (username && password) {
        users.push({
            username: username,
            password: password,
        });
        return res.status(201).json({ status: 200, message: "User Signup Successfully!" });
    } else  
    return res.status(400).json({ status: 400, message: "Failed to Signup! Missing data" });
});
app.listen(3000);