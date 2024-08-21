function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

function operation(a,b,cb){
    return cb(a,b)
}

console.log(operation(1,3,sum))

let total = operation(3,3,(a,b)=>{
    return a+b;
})
console.log(total)

