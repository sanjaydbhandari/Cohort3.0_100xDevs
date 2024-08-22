// Promises -> eventual completion of task . it is an object;

// syntax : let promise = new Promise((resolve, reject)=>{})

function getData(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('data1 : '+data);
            resolve('success')
        },2000);
    })
}

getData(1).then((res)=>{
    getData(2).then((res)=>{
        
    })
})


// function getnewData(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data: "+data)
//             resolve('success')
//         },2000)
//     })
// }

// getnewData(1).then((res)=>{
//     getnewData(2).then((res)=>{
//         getnewData(3).then((res)=>{
            
//         })
//     })
// })
