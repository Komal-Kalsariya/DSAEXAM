


let arr=[10,20,1,50,5,5,3,5,100]

class stack{
    constructor(size){
        this.item=new Array(size)
        this.index=-1
        this.size=size
    }
    push(val){
        this.index++
        this.item[this.index]=val
    }
    length(){
        return this.index+1
    }
}
let stk=new stack()
console.log(stk)
stk.push(arr)
console.log(stk)
