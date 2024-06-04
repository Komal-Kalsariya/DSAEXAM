let str="#test##"
let stack=[]
for(let i=0;i<str.length;i++){
    stack.push(str[i])
    if(stack[i]=="#"){
        stack.pop()
    }

}
console.log(stack);