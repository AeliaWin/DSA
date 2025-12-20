// 0 1 1 2 3 5 8 13 21
// 0 1 2 3 4 5 6  7  8

// n - 5
// 0 + 0
// 0 + 1
// 1 + 1
// 2 + 2
// time - O(n)
// space - O(n)
function fibonacciIterative(n){
    let answer = [0,1];
    for (let i = 2; i <= n; i++){
        answer[i] = answer[i-1] + answer[i-2];
    }
    return answer[n];

}

// time - O(2^n)
// space - O(n)
function findFactorialRecursive(n){
    // if (n === 0){
    //     return n;
    // }
    // if (n === 1){
    //     return n;
    // }
    if (n<2){
        return n;
    }
    return findFactorialRecursive(n-1)+findFactorialRecursive(n-2);

}

console.log(fibonacciIterative(1));