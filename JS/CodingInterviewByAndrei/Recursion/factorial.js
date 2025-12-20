// time - O(n)
function findFactorialRecursive(number){
    // below is my code
    // let answer = 1;
    // if (number === 0){
    //     return answer;
    // }
    // answer = number * findFactorialRecursive(number-1);
    // return answer;
    // need to add base case if number < 2;
    if(number === 2){
        return 2;
    }
    return number * findFactorialRecursive(number-1);
}

// time - O(n)
function findFactorialIterative(number){
    let answer = 1;
    // below is my code
    // for(let i = number; i > 0; i--){
    //     answer *= i;
    // }
    // 0! = 1
    // 1! = 1
    if(number === 2){
        answer = 2;
    }
    for (let i = 2; i <= number; i ++){
        answer *= i;
    }
    return answer;
}

console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));