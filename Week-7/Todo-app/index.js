const express = require('express');
const app = express();
const config = require('./config/config');
const PORT = config.PORT;
const {auth} = require('./middleware/auth');
const {dbConnect}=require("./config/dbConnect");
const {todoRouter} = require('./routes/todo.route');
const {userRouter} = require('./routes/user.route');

console.log(dbConnect());
app.use(express.json());
app.use(auth)
app.use("/api/v1/users",userRouter);
app.use("/api/v1/todos",todoRouter);

app.listen(PORT,()=>{
    console.log(`app is listen on port ${PORT}`);
})

