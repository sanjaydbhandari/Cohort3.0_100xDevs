// Functional arguments -> passing a function to another arguments

function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operation(a,b,ops){
    return ops(a,b);
}

function doSomething(a,b,operation){
    console.log(operation(a,b))
}

doSomething(1,2,sum)










