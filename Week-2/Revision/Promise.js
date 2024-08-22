// function setTimeoutPromisified(ms){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('hi');
//             resolve('time out successfully')
//         }, ms);
//     })
// }

// setTimeoutPromisified(2000).then((res)=>{
//     console.log(res);
// }).then(()=>{
//     console.log('set Time out completed!')
// })

// promise chaining -------------------------------


// function setTimeoutPromisified(ms){
//     return new Promise((resolve,reject)=>setTimeout(resolve,ms))
// }

// setTimeoutPromisified(1000).then(()=>{
//     console.log("hi")
//     setTimeoutPromisified(2000).then(()=>{
//         console.log("hello")
//         setTimeoutPromisified(5000).then(()=>{
//             console.log("hello there!")
//         })
//     })
// })


// check this in web browser
function setTimeoutPromisified(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("hii");
            resolve("console log successfully!")
        },ms)
    })
}

const hello = setTimeoutPromisified(5000).then((res)=>{
    console.log(res);
}).then(()=>{
    console.log("bye bye")
})


