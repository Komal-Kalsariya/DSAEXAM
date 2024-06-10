class stack{
    constructor(size){
        this.items=new Array(size)
        this.index=-1
        this.size=size
    }
    push(value){
        this.index++
        if(this.index<this.size){
            this.items[this.index]=value
        }
        else{
            console.log("stack overflow");
        }
    }
    pop(){
        if(this.index!=-1){
            let val=this.items[this.index]
            this.items[this.index--]=-1
            return val
        }
        else{
            console.log("stack underflow");
        }
    }
}
let stk=new stack(5)
stk.push(10);
stk.pop()
console.log(stk)


class Queue{
    constructor(size){
        this.size=size
        this.items=new Array(size)
        this.front=-1
        this.rear=-1
    }
    enqueue(items){
        if(this.front==-1 && this.rear==-1){
            this.front++
            this.rear++
            this.items[this.rear]=items
        }
        else{
            if(this.rear<this.size-1){
                this.rear++
                this.items[this.rear]=items
            }
            else{
                console.log("queue overflow");
            }
        }
    }
}