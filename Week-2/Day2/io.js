const fs = require('fs');

// var data = fs.readFileSync('./file.txt','utf-8');
// var file2data = fs.readFile('./file2.txt','utf-8',(err,contents)=>console.log(contents));
// // setInterval(()=>console.log("hello"),2000);
// console.log(data +" | "+ file2data)

// 2.asynchronous 
function print(err,data){
    if(err)
        console.log("error found : "+err)
    else
        console.log(data);
}

fs.readFile('./file2.txt','utf-8',print)
fs.readFile('./file.txt','utf-8',print)
console.log('Done!')


// ---------------

const filesystem = require('fs')

var data = filesystem.readFileSync('./file.txt','utf-8')
console.log(data)