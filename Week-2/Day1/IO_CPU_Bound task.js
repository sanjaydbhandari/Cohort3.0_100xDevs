console.log('chal le ek bartan');

//execute in web api section and push in callback queue and wait until boiling task is complete / call stack is free
setTimeout(()=>{
    console.log('dhund sugar,milk, chai patti')
},2000);

//running code in call stack
let boiling=0;
for(let i=0;i<10000000;i++){
    boiling++;
}

console.log("water boiled....")