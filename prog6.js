let stack=[]
let str="{(){[]}"

for(let i=0;i<str.length;i++){
    if(str[i]=="{" || str[i]=="(" || str[i]=="["){
        stack.push(str[i])
    }
    else{
        if(stack[i]!="]" || stack[i]!=")" || stack[i]!="}"){
            stack.pop()
        }
    }
}
console.log(stack)
