// inserted from one side
// removed from one side
// this.first -> remove
// this.last -> inserted
class Queue {
    constructor(){
        this.first = [];
        this.last = [];
    }
    push(value){
        // this.first.push(value);
        // if(this.first.length === 0){
        //     this.last.push(value);
        // } else {
        //     this.last.pop();
        //     this.last.push(value);
        // }
        const length = this.first.length;
        for(let i = 0; i < length; i++){
            this.last.push(this.first.pop());
        }
        this.last.push(value);
        return this;
    }
    peek(){
        if(this.first.length >0){
            return this.first[this.first.length-1];
        }
        return this.last[0];
    }
    pop(){
        // const unwanted = this.first[0];
        // if(this.first.length === 0){
        //     return null;
        // }
        // if(this.first.length === 1){
        //     this.last.pop();
        // }
        // let counter = 0;
        // while (counter < this.first.length-1){
        //     this.first[counter] = this.first[counter+1];
        //     counter++;
        // }
        // this.first.pop();
        // return unwanted;
        const length = this.last.length;
        for (let i = 0; i <length; i++){
            this.first.push(this.last.pop());
        }
        this.first.pop()
        return this;
    }
    empty(){
        // return this.first.length === 0;
        return this.first.length === 0 && this.last.length === 0;
    }
}

const myQueue = new Queue();
console.log(myQueue);
console.log(myQueue.push(1));
console.log(myQueue.push(2));
console.log(myQueue.peek());
console.log(myQueue.pop());
console.log(myQueue.empty());
console.log(myQueue.pop());
console.log(myQueue.empty());
console.log(myQueue);

console.log('peek',myQueue.peek());
console.log(myQueue.push('Joy'))
console.log(myQueue.push('Matt'))
console.log(myQueue.push('Pavel'))
console.log(myQueue.peek());

console.log(myQueue.pop());
console.log(myQueue.pop());
console.log(myQueue.push('Samir'));
console.log(myQueue.pop());