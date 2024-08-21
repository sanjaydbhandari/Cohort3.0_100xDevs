// synchronus code -> code execute line by line

const fs = require('fs');

let data1 = fs.readFileSync('./concept1.txt','utf-8');
console.log("file 1: \n"+data1)
let data2 = fs.readFileSync('./concept.txt','utf-8');
console.log("\n file 2: \n"+data2)

// Asynchronus ->time consuming code executing simultaneously. 

fs.readFile('./concept1.txt','utf-8',(err,content)=>{
    setTimeout(()=>{
        console.log(content);
    },2000)
})

fs.readFile('./concept.txt','utf-8',(err,content)=>{
    console.log(content);
})