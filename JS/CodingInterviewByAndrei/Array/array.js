const strings = ['a', 'b', 'c', 'd']; //dynamic array in js
// 4x4 = 16 bytes of storage

console.log(strings[2]); //c -> O(1)


// push
strings.push('e');  //O(1)
console.log(strings);

// pop
strings.pop(); //remove the last item - O(1)
console.log(strings);

// unshift
strings.unshift('x'); //O(n) -> loop through everything and reassign
console.log(strings); 

// splice
strings.splice(2,0,'alien'); //O(n)
console.log(strings);


// C++
// int a[20]; static array with 20 items in array 5
// int b[5] {1,2,3,4,5};
