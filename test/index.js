let n=3;
for(let i=1;i<=n;i++){
    let str=""
    for(let j=1;j<=n;j++){
        if(i+j<=n)
            str+="-"
        if(i+j>=n && j-i<n-1)
            str+="*"
    }
    console.log(str)
}