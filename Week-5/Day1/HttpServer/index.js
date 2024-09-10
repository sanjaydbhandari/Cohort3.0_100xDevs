const express = require('express');
const app = express();
const axios = require('axios')

// how to use Axios
app.get('/data',(req,res)=>{
    axios.get('https://jsonplaceholder.typicode.com/todos/.1')
    .then(response => res.json(response.data))
    .catch(err=>res.json({"error": err.message}))
    }
)

app.get('/add',(req,res)=>{//http://localhost:3000/add?a=10&b=1
    res.json({
        "result":parseInt(req.query.a)+parseInt(req.query.b)//query parameter
    })
});
app.get('/addition/:a/:b',(req,res)=>{//http://localhost:3000/addition/10/1
    res.json({
        "result":parseInt(req.params.a)+parseInt(req.params.b)//Dynamic routes
    })
});
app.get('/sub',(req,res)=>{
    res.json({
        "result":parseInt(req.query.a)-parseInt(req.query.b)
    })
});
app.get('/mul',(req,res)=>{
    res.json({
        "result":parseInt(req.query.a)*parseInt(req.query.b)
    })
});
app.get('/div',(req,res)=>{
    res.json({
        "result":parseInt(req.query.a)/parseInt(req.query.b)
    })
});

let PORT=3000;
app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}`)
})