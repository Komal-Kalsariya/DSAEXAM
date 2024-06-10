// Marge of two Array

let arr1=[1,2,3,4,5]
let arr2=[6,7,8,9,10]

let arr3=[]

let n=arr1.length
let m=arr2.length

let i=0
let j=0

while(i<n){
    arr3.push(arr1[i])
        i++
}        
while (j<m) {
    arr3.push(arr2[j])
        j++
 }
console.log(arr3)