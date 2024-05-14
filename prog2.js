let arr=[2,5,7,-2,-3,10]

let k=3
let minsum=0
let currsum=0
for(let i=0;i<k;i++){
    currsum+=arr[i]
}
minsum=currsum
for(let i=k;i<arr.length;i++){
   currsum+=arr[i]
   currsum-=arr[i-k]
   if(minsum>currsum){
    minsum=currsum
   }
   
}
console.log(minsum)
