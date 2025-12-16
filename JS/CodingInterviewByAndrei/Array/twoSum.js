// two sum
// two input parameter -> array of int and int target
// output -> indices of two number that they add up to target
// have one solution

// input -> [2,7,11,15] 9
// output -> [0,1]

function twoSum(nums, target) {
    let idxes = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                idxes.push(i);
                idxes.push(j)
            }
        }
    }
    return idxes;
}


function twoSum1(nums, target){
    const seen = new Map();
    for(let i = 0; i < nums.length; i++){
        seen.set(nums[i],i);
    }
    for(let i = 0; i < nums.length; i++){
        const complement = target - nums[i];
        if(seen.has(complement) && seen.get(complement) !== i){
            return [i, seen.get(complement)];
        }
    }
    return [];
}

function twoSum2(nums, target){
    const seen = new Map();
    for(let i = 0; i < nums.length; i++){
        const complement = target - nums[i];
        if(seen.has(complement)){
            return [seen.get(complement),i];
        }
        seen.set(nums[i],i)
    }
    return [];
}


let nums = [3,2,4]
let target = 6
console.log(twoSum1(nums,target));