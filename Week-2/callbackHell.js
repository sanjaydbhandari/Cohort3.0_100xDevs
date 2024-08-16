
// ---------------CallBack Hell----------------

// function getData(data){
//     setTimeout(()=>{
//         console.log(`Data: ${data}`);
//     },2000)
// }

// getData()//undefined
// getData(1)
// getData(2)
// getData(3)

// here, console.log executed at same time but we want to call one after other

// function getData(data,getNextData){
//     setTimeout(()=>{
//         console.log(`data : ${data}`);
//         if(getNextData){
//             getNextData();
//         }
//     },2000)
// }

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3);
//     });
// })



function getData(data,getNextData){
    setTimeout(()=>{
        console.log(data);
        if(getNextData)
            getNextData()
    },2000)
}

getData(1,()=>{
    getData(2,()=>{
        getData(3)
    })
})