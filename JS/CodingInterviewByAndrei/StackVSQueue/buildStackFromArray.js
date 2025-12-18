class Stack {
    constructor(){
        this.data = [];
        // this.length = 0; //don't need this
    }
    peek(){
        // return this.data[0];
        return this.data[this.data.length-1];
    }
    push(value){
        //my code -> [discord,udemy,google]
        // let counter = this.data.length;
        // while(counter >0){
        //     const temp = this.data[counter-1];
        //     this.data[counter] = temp;
        //     counter--;
        // }
        // this.data[0] = value;
        this.data.push(value)
        return this;
    }
    pop(){
        // if(this.data.length === 0){
        //     return this;
        // }
        // if (this.data.length === 1){
        //     this.data = [];
        // }
        // let counter = 0;
        // while(counter < this.data.length-1){
        //     const temp = this.data[counter+1];
        //     this.data[counter] = temp;
        //     counter++;
        // }
        // delete this.data[this.data.length-1];
        // this.length--;
        this.data.pop();
        return this
    }
    isEmpty(){
        return this.data.length === 0;
    }
}

const myStack = new Stack();
console.log(myStack)
console.log(myStack.pop())
myStack.push('google');
myStack.pop();
console.log(myStack)
myStack.push('google')
myStack.push('udemy');
myStack.push('discord');
console.log(myStack);
myStack.pop();
console.log(myStack);
myStack.pop();
console.log(myStack);
myStack.pop();
console.log(myStack);
console.log(myStack.pop())