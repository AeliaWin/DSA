const nemo = ['nemo'];

const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];

const large = new Array(100000).fill('nemo');

function findNemo(array) {
    let t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log("Found Nemo!");
            break;
        }
    }
    let t1 = performance.now();
    console.log('Call to find Nemo took '+ (t1-t0) + ' milliseconds');
}

findNemo(large);

console.log('-----------------------------------');
console.log('Big O Notation: O(n) - Linear Time');
console.log('Big O is considering the worst case scenario');


const findNemo1 = array => {
    array.forEach(fish => {
        if (fish === 'nemo') {
            console.log('Found Nemo!');
        }
    })
}

const findNemo3 = array => {
    for (let fish of array) {
        if (fish === 'nemo') {
            console.log('Found Nemo!');
        }
    }
}

const boxes = [0,1,2,3,4,5];

function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]); // O(1)
    console.log(boxes[1]); // O(1)
}

logFirstTwoBoxes(boxes); // O(1) + O(1) = O(2) --> O(1)

console.log('-----------------------------------');
console.log('Big O Notation: O(1) - Constant Time');