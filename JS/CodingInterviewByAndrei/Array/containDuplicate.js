// Leetcode - 217

//input parameter -> int array
//output -> boolean

// input: nums = [1,2,3,1]
//output: true

// naive approach
//time - O(n^2)
//space - O(1)
function containDuplicate(nums){
    for(let i = 0; i < nums.length; i ++){
        for(let j = i+1; j <nums.length; j++){
            if(nums[i] === nums[j]){
                return true;
            }
        }
    }
    return false;
}

// time - O(n)
// space - O(n)
function containDuplicate1(nums){
    let seen = new Set();
    for(let i = 0; i< nums.length; i++){
        if(seen.has(nums[i])){
            return true;
        }
        seen.add(nums[i]);
    }
    return false;
}

// time - O(n)
// space - O(n)
function containDuplicate2(nums){
    nums.sort()
    for(let i = 1; i < nums.length; i++){
        // check previous num
        if(nums[i] === nums[i-1]){
            return true;
        }
    }
    return false;
}

// time - O(n)
// space - O(n)
function containDuplicate3(nums){
    //check length
    let newSet = new Set(nums);
    return newSet.size < nums.length;
}
console.log(containDuplicate3([1,2,3,4]))