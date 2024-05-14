let arr=[2,3,2,2,3,3,5,5,5,6]
//let dub=arr[0]
let index=0
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
        
             console.log(arr[i])

        }
    }
}

