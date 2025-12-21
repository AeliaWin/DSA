// time - O(2^n)
// space - O(n)
let calculationsForRecurisive = 0;
function fibonacciRecurisive(num){
    calculationsForRecurisive++;
    if(num === 0 || num === 1){
        return num;
    }
    return fibonacciRecurisive(num - 1) + fibonacciRecurisive(num - 2);
}

console.log(fibonacciRecurisive(30));
console.log(calculationsForRecurisive)

// time - O(n)
// memorization - DP
let calcutaions = 0;
function fibonacciMemorized(){
    let cache = {};
    return function fib(n){
        calcutaions++;
        if (n in cache){
            return cache[n];
        } else {
            if (n < 2){
                return n;
            } else {
                cache[n] = fib(n-1) + fib(n-2);
                return cache[n];
            }
        }
    }
}

const fasterFib = fibonacciMemorized();
console.log(fasterFib(30));
console.log(calcutaions);