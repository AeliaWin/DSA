// Leetcode - 283

// input -int array -> [0,1,0,3,12]
// output - int array -> [1,3,12,0,0]
// note - do not make a copy of the array

// time - O(n^2)
// space - O(1)
function moveZeros(nums){
    if(nums.length < 2){
        return nums
    }
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0) {
            for(let j = i+1; j< nums.length; j++){
                if(nums[j] !== 0){
                    let num = nums[j]
                    nums[j] = nums[i]
                    nums[i] = num
                    break;
                }
            }
        }
    }
    return nums
}

// time - O(n)
// space - O(1)
function moveZeros1(nums){
    let left = 0;
    // for(let right = 1; right < nums.length; right++){
    //     if(nums[left] === 0 && nums[right] !== 0){
    //         let temp = nums[left];
    //         nums[left] = nums[right];
    //         nums[right] = temp;
    //     }
    //     if(nums[left] !== 0){
    //         left++;
    //     }
    // }
    for(let right = 0; right < nums.length; right++){
        if(nums[right] !== 0) {
            [nums[right], nums[left]] = [nums[left], nums[right]];
            left++;
        }
    }
    return nums
}

let nums = [0,0,0,1,1,1,0]
console.log(nums.findIndex(num => {
    return num === 0
}))

console.log(moveZeros1(nums))