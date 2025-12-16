const basket = ['apples','grapes','pears'];

//linked lists: apples -> grapes -> pears
//js don't have built-in linked lists

let obj1 = {
    a: true
};

let obj2 = obj1; //reference to obj1's memory -> pointer
console.log('1',obj1);
console.log('2',obj2);

obj1.a = 'booya';
console.log('1',obj1);
console.log('2',obj2);

// delete obj1;
obj1 = null;
console.log('1',obj1);
console.log('2',obj2); //still has booya because of garbage collection

obj2 = 'hello';
console.log('2',obj2); 