// input -> [2,5,1,2,3,5,1,2,4]
// output -> 2
// input -> [2,1,1,2,3,5,1,2,4];
// output -> 1
// input -> [2,3,4,5];
// output -> undefined

// time - O(n)
// space - O(n)
function firstRecurringChar(nums){
    let seen = new Set();
    for (let i = 0; i< nums.length; i++){
        if(seen.has(nums[i])){
            return nums[i];
        } else{
            seen.add(nums[i])
        }
    }
    return undefined;
}

// time - O(n^2)
// space - O(1)
// wrong in some cases
function firstRecurringChar1(nums){
    let idx = 0;
    let char;
    // console.log('before',char)
    for(let i = 0; i < nums.length; i++){
        // console.log("i",i)
        for(let j = i + 1; j< nums.length; j++){
            if(nums[i] === nums[j]){
                if(idx > 0) {
                    if(idx > (j-i)){
                        idx = j-i
                        char = nums[j];
                        // console.log('after',char)
                    }
                } else {
                    idx = j-i;
                    char = nums[j];
                }
            }
        }
    }
    return char;
}

// time - O(n)
// space - O(n)
function firstRecurringChar2(nums){
    let map = {};
    for(let i = 0; i< nums.length; i++){
        if(map[nums[i]] !== undefined){
            return nums[i];
        } else {
            map[nums[i]] = i;  //true
        }
    }
    return undefined;
}

// let nums = [2,1,1,2,3,5,1,2,4];
// let nums = [2,5,1,2,3,5,1,2,4];
let nums = [2,3,4,5];
console.log(firstRecurringChar1(nums));