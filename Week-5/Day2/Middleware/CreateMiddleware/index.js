const express = require('express');
const app = express();

app.use(express.json())//it is a middleware function

// Middleware
function logger(req,res,next){
    console.log(`Method name : ${req.method}`);
    next();
}

const add = (req,res)=>{
    res.json({
        'result':parseInt(req.params.a)+parseInt(req.params.b)
    })
};

const sub = (req,res)=>{
    res.json({
        'result':parseInt(req.params.a)-parseInt(req.params.b)
    })
};

const mul = (req,res)=>{
    res.json({
        'result':parseInt(req.params.a)*parseInt(req.params.b)
    })
};

const div = (req,res)=>{
    res.json({
        'result':parseInt(req.params.a)/parseInt(req.params.b)
    })
};
    
app.use(logger)//counter middleware is not applicable before use  ->  request handler should be below use Middleware.
app.get('/add/:a/:b',add)
app.get('/sub/:a/:b',sub)
app.get('/mul/:a/:b',mul)
app.get('/div/:a/:b',div)


const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`app running on Port ${PORT}`)
})