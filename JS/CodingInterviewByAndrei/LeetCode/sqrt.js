// Leetcode - 69

function mySqrt(x){
    if (x === 0 || x === 1){
        return 1;
    }
    let left = 1, right = x;
    while (left <= right){
        let mid = Math.floor((left + right) / 2);
        console.log(left,right,mid);
        if (mid * mid === x){
            return mid;
        } else if (mid * mid < x){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
}
let x = 8;
console.log(mySqrt(x));