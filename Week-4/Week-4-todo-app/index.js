let data = fetch('./data.json').then((res)=>res.json())
const bodyELe = document.querySelector('body');
const model = document.querySelector('.model');
const containerELe = document.querySelector('.container');
const CollectionInputEle = document.querySelector('.collection-input-container');

data.then((collections)=>{
    collections.map((collection)=>{
        console.log(collection)
    })
})
// animation
function slideDown(ele){
    const SelectEle = document.querySelector(ele);
    SelectEle.children[0].style.top="50%";
    SelectEle.style.display='block';
}

function closeModel(ele){
    const SelectEle = document.querySelector(ele);
    SelectEle.style.display="none";
}

window.onclick = function(event){
    if(event.target == model)
        model.style.display = 'none';
}



// // logic code

// const express = require('express')
// const app = express()

// app.get('/',(req,res)=>{
//     res.send('Hello World')
// })

// app.get('/get-todo',(req,res)=>{
//     res.json({name:'sanjay',age:''})
//     // res.send('Hello World')
// })

// app.listen(3000)