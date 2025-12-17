// doubly Linked list;
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    // transverseToIndex(index){
    //     let counter = 0;
    //     let currentNode = this.head;
    //     while(counter !== index){
    //         currentNode = currentNode.next;
    //         counter++;
    //     }
    //     return currentNode;
    // }
    append(value){
        const newNode = new Node(value);
        // const leaderNode = this.transverseToIndex(this.length-1,'next');
        // console.log(leaderNode)
        // newNode.prev = leaderNode;
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value){
        const newNode = new Node(value);
        // const currentNode = this.head;
        // newNode.next = currentNode;
        // currentNode.prev = newNode;
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }
    printList(node){
        let array = []
        if(node === 'next'){
            let currentNode = this.head;
            while(currentNode !== null){
                array.push(currentNode.value);
                currentNode = currentNode.next
            }
        }
        if(node === 'prev'){
            let currentNode = this.tail;
            while(currentNode !== null){
                array.push(currentNode.value);
                currentNode = currentNode.prev;
            }
        }
        return array;
    }
    transverseToIndex(index,node){
        let currentNode;
        if(node === 'next'){
            let counter = 0;
            currentNode = this.head;
            while(counter < index){
                currentNode = currentNode.next;
                counter++;
            }
        }
        if(node === 'prev'){
            let counter = 0;
            currentNode = this.tail;
            while(counter < index ){
                // console.log(currentNode)
                currentNode = currentNode.prev;
                counter++;
            }
        }
        return currentNode;
    }
    insert(index,value){
        if(index === 0){
            this.prepend(value);
            return this;
        }
        if(index >= this.length-1){
            this.append(value);
            return this;
        }
        if(index >0 && index<this.length){
            const newNode = new Node(value);
            const leaderNode = this.transverseToIndex(index-1,'next');
            console.log(leaderNode);
            const holdingPointer = leaderNode.next; //follower
            console.log(holdingPointer);
            leaderNode.next = newNode;
            newNode.next = holdingPointer;
            holdingPointer.prev = newNode;
            newNode.prev = leaderNode;
            this.length++;
            return this;
        }
    }
    remove(index){
        if(index === 0){
            this.head = this.head.next;
            this.head.prev = null;
            this.length--;
            return this;
        }
        if(index === this.length-1){
            console.log('before',this.tail.prev);
            this.tail = this.tail.prev;
            console.log('after',this.tail);
            this.tail.next = null;
            this.length--;
            return this;
        }
        if(index > 0 && index < this.length-1){
            const leaderNode = this.transverseToIndex(index-1,'next');
            const unwantedNode = leaderNode.next;
            const holdingPointer = unwantedNode.next;
            // console.log('leader',leaderNode);
            // console.log('unwanted',unwantedNode);
            // console.log(holdingPointer);
            leaderNode.next = unwantedNode.next;
            holdingPointer.prev = unwantedNode.prev;
            this.length--;
            return this;
        }
    }
}

const myDoublyLinkedList = new DoublyLinkedList(5);
console.log(myDoublyLinkedList);

myDoublyLinkedList.append(10);
console.log(myDoublyLinkedList);

myDoublyLinkedList.append(2);
console.log(myDoublyLinkedList);

myDoublyLinkedList.prepend(9);
console.log(myDoublyLinkedList);

console.log(myDoublyLinkedList.printList('prev'));

// console.log(myDoublyLinkedList.transverseToIndex(1,'prev'));

myDoublyLinkedList.insert(2,8);
// console.log(myDoublyLinkedList);
console.log(myDoublyLinkedList.printList('next'));

myDoublyLinkedList.remove(2);
console.log(myDoublyLinkedList);
console.log(myDoublyLinkedList.printList('prev'));