let data = fetch('./data.json').then((res)=>res.json());
const bodyELe = document.querySelector('body');
const model = document.querySelector('.model');
const containerELe = document.querySelector('.container');
const CollectionInputEle = document.querySelector('.collection-input-container');

function checkTaskCompleted(id,tasks){
    let count = 0;
    tasks.map((task)=>{
        if(task.isDone==true){
            ++count;
        }
    })
    return count; 
}


function showContainer(ele,data){
    const CCELe = document.querySelector(ele);
    data.then((collections)=>{
        collections.map(({id,collectionName,tasks})=>{
            let done = checkTaskCompleted(id,tasks);
            const CCDiv = document.createElement('div');
            CCDiv.classList='collection';
            CCDiv.classList.add('border');
            CCDiv.classList.add(id);
            const CCheading = document.createElement('h1');
            CCheading.innerHTML=collectionName;
            const CCpara = document.createElement('p');
            CCpara.innerHTML=`${done}/${tasks.length} Done`;
            CCpara.classList='done-count';
            CCDiv.appendChild(CCheading);
            CCDiv.appendChild(CCpara);
            CCELe.appendChild(CCDiv);
        })
    })
}
function createCategory(ele){
    const collection = document.querySelector(ele).value;
    console.log(data)
    let category = {
        id:data.length,
        collectionName:collection.toString(),
        task:[],
        isvisible:true
    }
    data.push(category);
}

showContainer('.collection-container',data)

// animation
function slideDown(ele){
    const SelectEle = document.querySelector(ele);
    SelectEle.children[0].style.top="50%";
    SelectEle.style.display='block';
}

function closeModel(ele){
    const SelectEle = document.querySelector(ele);
    SelectEle.children[0].style.top="-50%";
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