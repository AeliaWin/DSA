class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek(){
        return this.top;
    }
    push(value){
        // console.log('top',this.top);
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            // console.log('new',newNode);
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            newNode.next = holdingPointer;
            this.top = newNode;
        }
        this.length++;
        return this;

    }
    pop(){
        if (this.isEmpty()){
            // return console.log('Cannot be pop anymored');
            return null;
        }
        // const unwantedNode = this.top;
        // if (this.length !== 1){
        //     this.top = this.top.next;
        //     this.length--;
        // } else {
        //     this.top = null;
        //     this.bottom = null;
        //     this.length = 0;
        // }
        if (this.top === this.bottom){
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
        return this;
    }
    isEmpty(){
        return this.length === 0;
    }
}

const myStack = new Stack();
console.log('check empty state', myStack.isEmpty());
console.log(myStack);
myStack.push(5)
console.log(myStack);
myStack.push(10)
console.log(myStack);
console.log('check empty state', myStack.isEmpty());
myStack.push(15)
console.log(myStack);
console.log(myStack.peek());
myStack.pop();
console.log(myStack)
myStack.pop();
console.log(myStack)
myStack.pop();
console.log(myStack.peek())