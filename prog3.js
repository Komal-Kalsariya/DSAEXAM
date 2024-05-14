let arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
const isPrime=(num)=>{
    if(num==1){
        return false
    }
   for(let i=2;i<num;i++){
    if(num%i==0){
        return false
    }
   }
   return true
}
let m=arr.length
let n=arr[0].length
for(let i=0;i<m;i++){
    
    for(let j=0;j<n;j++){
        if(isPrime(arr[i][j])){
            console.log(arr[i][j])
        }
    }
}