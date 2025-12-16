// implementing an array
class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    // access the data with index
    get(index) {
        return this.data[index];
    }

    // add the items
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    // delete the last item
    pop() {
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];  //built in js function
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);  //method
        return item;
    }

    shiftItems(index) {
        for (let i = index; i < this.length-1; i++) {
            this.data[i] = this.data[i+1]
        }
        //there is still one item in the array which need to be deleted
        delete this.data[this.length-1];
        this.length--;
    }
}

const newArray = new MyArray();
console.log(newArray);

console.log(newArray.get(0));
newArray.push('hi');
newArray.push('you');
console.log(newArray);

newArray.push('!');
newArray.pop();
newArray.pop();
console.log(newArray);

newArray.push('are');
newArray.push('you');
newArray.push('nice');
newArray.delete(0);
console.log(newArray);