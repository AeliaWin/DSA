// leetcode 108
// input - > sorted array
// output -> array -> height balanced

class TreeNode{
    constructor(val,left,right){
        this.val = (val ===undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

let nums = [-10,-3,0,5,9]
function sortedArrayToBST(nums){
    if(nums.length === 0){
        return null;
    }
    let midIndex = Math.floor(nums.length/2);
    let root = new TreeNode(nums[midIndex]);
    root.left = sortedArrayToBST(nums.slice(0,midIndex));
    root.right = sortedArrayToBST(nums.slice(midIndex+1));
    return root;
}
console.log(sortedArrayToBST(nums));
// console.log(transverse(sortedArrayToBST(nums)));