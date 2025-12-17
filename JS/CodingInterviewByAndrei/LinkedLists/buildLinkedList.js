// 10 --> 5 --> 16
// 10 is head value
// next is point to 5
// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    // create the very first node
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        // since there is one node, head and tail are 
        // the same node
        this.tail = this.head;
        this.length = 1;
    }
    accessNestedProperty(obj, path){
        const keys = path.split(".");
        console.log('keys',keys);
        console.log('obj',obj)
    }
    append(value){
        // const newNode = {
        //     value: value,
        //     next: null
        // };
        const newNode = new Node(value);
        // const objKey = 'next';
        // let currentNode = this.head;
        // for(let i = 0; i <= this.length; i++){
        //     if(objKey in currentNode){
        //         if(currentNode[objKey] === null){
        //             currentNode[objKey] = newNode;
        //         }
        //         currentNode = currentNode[objKey];
        //         // console.log('currentNode',currentNode)
        //     }
        // }
        // console.log('head', this.head)
        this.tail.next = newNode;
        // console.log('tail next ', this.tail.next)
        // console.log(this.tail)
        // console
        // .log('head after chaning tail next',this.head)

        this.tail = newNode;
        // console.log('tail value',this.tail);
        // console.log('head after changing tail', this.head);
        this.length++;
        return this;
    }
    prepend(value){
        // const newNode = {
        //     value: value,
        //     next: this.head
        // }
        const newNode = new Node(value);
        newNode.next = this.head;
        // console.log(newNode)
        this.head = newNode;
        this.length++;
        return this;
    }
    printList(){
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null ){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    transverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    insert(index,value){
        if(index === 0){
            this.prepend(value)
            return this;
        }
        if(index >= this.length){
            this.append(value)
            return this;
        }
        if(index > 0 && index < this.length){
            const newNode = new Node(value);
            let currentNode = this.head;
            // mycode
            // for(let i = 1; i < this.length; i++){
            //     if(i === index){
            //         newNode.next = currentNode.next;
            //         currentNode.next = newNode;
            //         break;
            //     } else {
            //         currentNode = currentNode.next;
            //     }
            // }
            // console.log('current',currentNode)
            // console.log('new',newNode)

            const leader = this.transverseToIndex(index-1);
            const holdingPointer = leader.next;
            leader.next = newNode;
            newNode.next = holdingPointer;
            this.length++;
            return this;
        }
    }
    remove(index){
        if(index===0){
            this.head = this.head.next;
            this.length--;
            return this
        }
        if(index === this.length-1){
            const leader = this.transverseToIndex(index-1)
            // console.log("leader next", leader.next)
            // console.log("leader value", leader.value)
            leader.next = null;
            this.tail = leader;
            this.length--;
            return this;
        }
        if(index > 0 && index < this.length-1){
            const leaderNode = this.transverseToIndex(index-1);
            // const unwantedNode = this.transverseToIndex(index);
            const unwantedNode = leaderNode.next;
            leaderNode.next = unwantedNode.next;
            this.length--;
            return this;
        }
    }

    reserve(){
        // below comment code is my code
        // let array = [];
        // for(let i = this.length-1; i>=0; i--){
        //     // console.log('remove for loop',i,this.transverseToIndex(i));
        //     array.push(this.transverseToIndex(i).value);
        // }
        // console.log(array)
        // this.head = null;
        // this.tail = null;
        // this.length = 0;
        // for(let i = 0; i< array.length; i++){
        //     if(i === 0){
        //         this.head = {
        //             value: array[i],
        //             next: null,
        //         }
        //         this.tail = this.head;
        //         this.length = 1;
        //     } else {
        //         this.append(array[i]);
        //     }
        // }
        // console.log(this.head)
        // console.log(this.tail)

        console.log(this.head)
        // if there is one node
        // return the node
        if(!this.head.next){
            return this;
        }
        // more than one node
        // from this
        //1->2->3->4->5
        // to this
        //1<-2<-3<-4<-5
        // first -> 1   second -> 2
        // if there is second -> go through loop
        // we also declare that this.tail will referecne as this.head
        // 1->2->3->4->5->1 (circular)
        let first = this.head;
        let second = first.next;
        // console.log('before loop -first',first);
        // console.log('before loop -second',second);
        this.tail = this.head;
        // console.log('before loop - tail',this.tail);
        while(second){
            // second -> 2, temp -> 3
            // change arrow dir -> 1<-2
            // so first -> 2, second ->3
            //temp->4, change dir -> 2<-3
            // first -> 3, second ->4
            // 3<-4 -> first -> 4, second ->5
            // 4<-5 -> first -> 5, second -> null
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        console.log(this.head);
        // 1<-2<-3<-4<-5<-1
        this.head.next = null;
        this.head = first;
        console.log(this)
        
        return this;
    }
}

const myLinkedList = new LinkedList(10);
// console.log(myLinkedList);

myLinkedList.append(16);
console.log("append",myLinkedList);
myLinkedList.append(5);
console.log("append",myLinkedList);

myLinkedList.prepend(25);
console.log("prepend",myLinkedList);

console.log(myLinkedList.printList());

myLinkedList.insert(0,20)
console.log(myLinkedList.printList());

myLinkedList.insert(5,30)
console.log(myLinkedList.printList());

console.log("index 3")
myLinkedList.insert(3,99)
console.log(myLinkedList.printList());

console.log("remove - index 3")
myLinkedList.remove(3);
console.log(myLinkedList);
console.log(myLinkedList.printList());

myLinkedList.reserve();
console.log(myLinkedList);
console.log(myLinkedList.printList());