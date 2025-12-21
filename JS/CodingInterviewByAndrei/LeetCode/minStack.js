// leetcode 155;
class MinStack{
    constructor(){
        this.data = [];
        this.minValue = [];
    }
    push(val){
        this.data.push(val);
        if(this.minValue.length === 0 || this.minValue.at(-1) >= val){
            this.minValue.push(val);
        }
        return this;
    }
    pop(){
        let val = this.data.pop();
        if(val === this.minValue.at(-1)){
            this.minValue.pop();
        }
        return val;
    }
    top(){
        return this.data[this.data.length-1];
    }
    getMin(){
        return this.minValue[this.minValue.length-1];
    }
}

let myStack = new MinStack();
console.log(myStack)
myStack.push(-2);
myStack.push(0);
myStack.push(-3);
console.log(myStack.getMin());
myStack.pop();
console.log(myStack.top());
console.log(myStack.getMin());