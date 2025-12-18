class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    isEmpty(){
        return this.length === 0;
    }
    transverseToIndex(index){
        let counter = 0;
        let currentNode = this.first;
        // console.log('helper current',currentNode);
        while(counter <= index){
            if(currentNode.next !== null){
                // console.log('inside if',currentNode);
                currentNode = currentNode.next;
            } else {
                return currentNode;
            }
            counter++;
        }
        return currentNode;
    }
    enqueue(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.first = newNode;
            this.last = newNode;
        } else {
            // this.last = newNode;
            console.log(this.transverseToIndex(this.length-1))
            // const leader = this.transverseToIndex(this.length-1);
            // leader.next = newNode;
            this.last.next = newNode;
            this.last = newNode;
            
        }
        this.last = newNode
        this.length++;
        return this;
    }
    dequeue(){
        if(this.length === 0){
            return null;
        }
        if(this.length === 1) {
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return this;
    }
    peek(){
        return this.first;
    }
}

const myQueue = new Queue();
console.log(myQueue);
console.log('check queue is empty',myQueue.isEmpty());
myQueue.enqueue('Joy');
console.log('peek',myQueue.peek());
console.log(myQueue);
myQueue.enqueue('Matt');
console.log(myQueue);
myQueue.enqueue('Pavel');
console.log(myQueue);
myQueue.enqueue('Samir');
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);