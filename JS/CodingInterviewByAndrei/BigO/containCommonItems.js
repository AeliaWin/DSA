// check whether 2 arrays have common items
// eg 1:
// arr1 = ['a', 'b','c','d'];
// arr2 = ['x','y','z','d'];
// output: true
// eg 2:
// arr1 = ['a', 'b','c','d'];
// arr2 = ['x','y','z'];
// output: false

// 2 parameters - arrays - no size limit
// return true or false

// naive approach - O(n*m) - two input parameters
// space - O(1)
function containCommonItems(arr, arr1) {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j <arr1.length; j++){
            if(arr[i] === arr1[j]) {
                return true;
            }
        }
    }
    return false;
}

// in order to speed -> use hash tables or objects in js
// arr1 => obj {
//     a: true,
//     b: true,
//     c: true,
//     x: true
// }
// arr2[idx] === obj.properties

function containCommonItems1(arr1,arr2) {
    // loop through first array and create obj
    // whether properties === items in the array
    // loop through second array and check if itmes in second 
    // array exists on created obj
    // not nested loop -> two separate loop -> O(n+m)
    // space - O(n)
    // objects are truned into strings in js

    let map = {};
    for(let i = 0; i <arr1.length; i++){
        if(!map[arr1[i]]){
            const item = arr1[i];
            map[item] = true;
        }
    }

    for(let j = 0; j <arr2.length; j++) {
        if(map[arr2[j]]){
            return true;
        }
    }

    return false;

}

//use built-in method
function containCommonItems2(arr1,arr2){
    return arr1.some(item => arr2.includes(item))
}

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y','x'];

if(containCommonItems2(array1,array2)){
    console.log("ContainCommonItems")
} else {
    console.log("Not Contain Common Items")
}