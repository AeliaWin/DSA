// console.log(7/2);
// console.log(Math.ceil(7/2))

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  let left = array.slice(0,Math.floor(array.length)/2);
  let right = array.slice(Math.floor(array.length/2));
  console.log(left,right)

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  let result = [];
  // let leftMaxLength = left.length;
  // let rightMaxLength = right.length;
  // while (leftMaxLength>0 && rightMaxLength>0){
  //   if(left[0]>right[0]){
  //     result.push(right.shift());
  //     rightMaxLength--;
  //   } else {
  //     result.push(left.shift());
  //     leftMaxLength--;
  //   }
  // }
  // if(!rightMaxLength>0){
  //   while(leftMaxLength>0){
  //     result.push(left.shift())
  //     leftMaxLength--;
  //   }
  // }
  // if(!leftMaxLength>0){
  //   while(rightMaxLength>0){
  //     result.push(right.shift())
  //     rightMaxLength--;
  //   }
  // }
  // return result
  let leftIndex = 0;
  let righIndex = 0;
  while (leftIndex < left.length && righIndex < righIndex.length){
    if(left[leftIndex] < right[righIndex]){
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[righIndex]);
      righIndex++;
    }
  }
  // console.log(result)
  return result.concat(left.slice(leftIndex)).concat(right.slice(righIndex));
}

console.log(merge([5,6],[1,3]));
const answer = mergeSort(numbers);
console.log(answer);