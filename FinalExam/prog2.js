let arr=[10,20,30,40,50,60,80]
let target=80

let result=-1

let i=0;
let j=arr.length-1

while(i<j){
    let mid=Math.floor((i+j)/2)
    if(arr[mid]==target){
        console.log(mid)
        break;
    }
    else if(arr[mid]>target){
        j=mid-1
        console.log(j);
    }
    else{
        i=mid+1
        console.log(i);
    }
    console.log(result)
    
}
