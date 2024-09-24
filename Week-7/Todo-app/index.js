const express = require('express');
const app = express();
const config = require('./config/config')
const DB_URL = config.DB_URL;
const PORT = config.PORT;
const auth = require('./middleware/auth')
const mongoose = require('mongoose');

mongoose.connect(DB_URL);  
const {todoRouter} = require('./routes/todo.route')
const {userRouter} = require('./routes/user.route')

app.use(express.json());
app.post("/api/v1/users/signin",userRouter)
app.post("/api/v1/todos",todoRouter)

app.listen(PORT,()=>{
    console.log(`app is listen on port ${PORT}`)
})

