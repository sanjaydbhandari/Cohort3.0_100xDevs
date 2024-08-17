let arr=[1,2,3,4,5,6,9];

for(let i=0;i<arr.length;i++){
    console.log(`arr [${i}] = ${arr[i]} of ${arr}`)
}
console.log('--------------forEach-------------------')
const array = arr.forEach((ele,i,arr)=>{
    console.log(`arr [${i}] = ${ele} of ${arr}`)
})