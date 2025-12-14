function hasPairWithSum(arr, sum) {
    // sorted array
    low = 0;
    high = arr.length - 1;

    while (low < high) {
        currentSum = arr[low] + arr[high];
        if (currentSum === sum) {
            return console.log('Pair found (' + arr[low] + ', ' + arr[high] + ')');
        } else if (currentSum < sum) {
            low++;
        } else {
            high--;
        }
    }
    return console.log('No pair found');
}

hasPairWithSum([1,2,4,4], 8);  

// unsorted array
function hasPairWithSumUnsorted(arr, sum) {
    const seen = new Set();
    for (let num of arr) {
        if (seen.has(num)) {
            return console.log('Pair found (' + (sum - num) + ', ' + num + ')');
        }
        seen.add(sum - num);
    }
    return console.log('No pair found');
}

hasPairWithSumUnsorted([10, 15, 3, 7], 17);

// check whether the pairs of the elements in array is same as the sum value
// sorted array
// two input parameter (array, sum value)
// eg1
// Input: [3,7,10,15] , 17
// Output: true
// eg2
// Input: [1,2,4,4] , 10
// Output : false

// naive approach
// time - O(n^2)
// space - O(1)
function pairsWithSum1(array, sum) {
    for(let i = 0; i < array.length; i++){
        for(let j = i+1; j < array.length; j++){
            if (array[i] + array[j] === sum){
                return true;
            }
        }
    }
    return false;
}

console.log(pairsWithSum1([3,10,15,7],17))

function pairsWithSum2(array, sum) {
    // sorted array
    // first elemets in the array is the smallest
    // last elements in the array is the largest
    // add the first and last elements in array
    // add value is greater the sum, (last idx -1)
    // add value is less the sum, (first idx + 1)
    // space - O(1)
    // time - O(n)

    let left = 0;
    let right = array.length - 1;

    while(left < right) {
        const currentSum = array[left] + array[right];
        if(currentSum === sum) {
            return true;
        } else if (currentSum > sum) {
            right--;
        } else {
            left++;
        }
    }
    return false;
}

console.log(pairsWithSum2([3,7,10,15],17))


// unsorted array
// eg1
// Input: [3,10,15,7] 17
// Ouput: true

// naive approach -> pairsWithSum1

// more efficient
function pairsWithSum3(array, sum) {
    // create set
    // check whether the (sum-array[idx]) in set
    // If not, add in the set
    // Otherwise, return true

    let seen = new Set();
    for(let i = 0; i < array.length; i++){
        let complacement = sum - array[i];
        if(seen.has(array[i])){
            return true;
        }
        seen.add(complacement)
    }
    return false;
}

console.log(pairsWithSum3([3,10,15,7],17))