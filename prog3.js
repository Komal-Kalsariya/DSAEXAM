let arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let m=arr.length
let n=arr[0].length
let count=0
for(let i=0;i<m;i++){
    count=0
    for(let j=1;j<n;j++){
        if(arr[j]%1==0 && arr[j]%arr[j]==0){
            count++
        }
    }
    if(count==2){
        console.log(arr[i])
    }
}