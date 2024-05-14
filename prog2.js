let arr=[2,5,7,-2,-3,100]

let k=3
let min=arr[0]
let start=0
for(let i=0;i<k;i++){
if(min>arr[i]){
    min=arr[i]
}
}
//console.log(min)
for(let i=k;i<arr.length;i++){
   arr[i]-arr[i-k]
   
}