//  i will return something in future. eg setTimeout(fn,sec)
// is an object that represent the eventual completion or failure of an async opeation and its result value.

// setTimeoutPromisified

function setTimeoutPromisified(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms)
    })
}

function callback(){
    console.log(`done....`)
}

setTimeoutPromisified(3000).then(callback)