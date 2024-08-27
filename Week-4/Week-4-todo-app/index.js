const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/get-todo',(req,res)=>{
    res.json({name:'sanjay',age:''})
    // res.send('Hello World')
})

app.listen(3000)