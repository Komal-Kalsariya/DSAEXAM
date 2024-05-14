let arr=[7,3,1,6,3,3,5,5,5,6]
//let dub=arr[0]
let result=[-1,-1]
let maxcount=0
let ele=0
for(let i=0;i<arr.length;i++){
    let count=0
    for(let j=0;j<arr.length;j++){
        if(arr[i]==arr[j]){
        
             count++

        }
    }
    if(count>maxcount){
        maxcount=count
        ele=arr[i]
    }
    
}
console.log(ele,maxcount)
result[0]=ele
result[1]=maxcount
console.log(result)

if(maxcount>1){
    result[0]=ele
    result[1]=maxcount
}
console.log(result)