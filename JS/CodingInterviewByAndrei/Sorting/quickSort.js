const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// const numbers = [3,7,8,5,2,1,9,5,4];

function quickSort(array, left, right) {
    let pivot;
    let partitionIndex
    if (left < right){
        pivot = right;
        partitionIndex = partition(array,pivot,left,right);
        quickSort(array,left,partitionIndex-1);
        quickSort(array,partitionIndex+1,right);
    }
    // let pivot= array[numbers.length-1]
    // let pivotIndex = numbers.length-1;
    // let i = 0;
    // while(i< array.length){
    //     while(array[i]>pivot && pivotIndex > i){
    //         swap(array,i,pivotIndex);
    //         pivotIndex--;
    //     }
    //     i++;
    // }
    // console.log('after swap', array)
    // console.log('pivot index',pivotIndex);
    // console.log(array.slice(0,pivotIndex))
    // quickSort(array.slice(0,pivotIndex),0,pivotIndex)
    return array;
 
}

function partition(array, pivot, left, right) {
    let pivotValue = array[pivot];
    let pivotIndex = right;
    let i = left;

    while (i < right){
        while(array[i]> pivotValue && pivotIndex > i) {
            swap(array,i,pivotIndex);
            pivotIndex--;
        }
        i++;
    }
    return pivotIndex;
}

function swap(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex-1];
    array[secondIndex-1] = array[secondIndex];
    array[secondIndex] = temp;
    console.log('during swap',array);
    return array;
  
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers[numbers.length-1])
console.log(numbers);