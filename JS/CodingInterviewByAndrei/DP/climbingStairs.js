// leetcode 70

function climbingStairsRecursive(num){
    if(num === 1 || num == 2){
        return num;
    }
    return climbingStairsRecursive(num-1)+climbingStairsRecursive(num-2);
}

console.log(climbingStairsRecursive(3));

function climbingStairsMemorized(){
    let cache = {};
    return function climbStairs(n){
        if (n in cache){
            return cache[n];
        } else {
            if (n==1 || n== 2){
                return n;
            }
            cache[n] = climbStairs(n-1) + climbStairs(n-2);
            return cache[n];
        }
    }
}
let memorized = climbingStairsMemorized();
console.log(memorized(3));