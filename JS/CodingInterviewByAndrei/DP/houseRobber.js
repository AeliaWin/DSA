// Leetcode 198

function houseRobber(n){
    if (n >= nums.length){
        return 0;
    }
    // if (n === nums.length-1){
    //     return nums[n];
    // }
    let profit = nums[n] + houseRobber(n+2);
    let restProfit = houseRobber(n+1);
    console.log(profit,restProfit);
    return Math.max(profit,restProfit);
}
let cache = {};
function houseRobber1(n){
    if (n in cache){
        return cache[n];
    } else {
        if(n>=nums.length){
            return 0;
        };
        let profit = nums[n] + houseRobber1(n+2);
        let restProfit = houseRobber1(n+1);
        cache[n] = Math.max(profit,restProfit);
        return cache[n];
    }
}

let nums = [2,7,9,3,1];
// let nums = [1,2,3,1];
console.log(houseRobber1(0))