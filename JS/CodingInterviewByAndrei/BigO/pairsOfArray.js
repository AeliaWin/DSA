const boxes = ['a', 'b', 'c', 'd', 'e'];

function logAllPairsOfArray(array) {
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            console.log(array[i], array[j]);
        }
    }
}

logAllPairsOfArray(boxes);

// nested loops result in O(n^2) time complexity
// because for each element in the outer loop,
// the inner loop runs through all elements of the array.
// Thus, if the array has 'n' elements, the total number of operations
// will be proportional to n * n, which is n squared.
// use * in nested loops to indicate multiplicative effect on time complexity.
// first loop runs n times, second loop runs n times for each iteration of the first loop,
// resulting in n * n = n^2 total iterations.