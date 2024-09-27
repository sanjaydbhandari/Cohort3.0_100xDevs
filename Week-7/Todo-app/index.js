const express = require('express');
const app = express();
const config = require('./config/config');
const PORT = config.PORT;
const {dbConnect}=require('./config/dbConnect');
const {todoRouter} = require('./routes/todo.route');
const {userRouter} = require('./routes/user.route');

app.use(express.json());
console.log(dbConnect());
app.use("/api/v1/users",userRouter);
app.use("/api/v1/todos",todoRouter);

app.listen(PORT,()=>{
    console.log(`app is listen on port ${PORT}`);
})

