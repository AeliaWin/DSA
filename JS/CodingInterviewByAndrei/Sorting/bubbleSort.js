const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// time - O(n^2)
// space - O(1)
function bubbleSort(array) {
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(array[j] > array[j+1]){
                // console.log(j,array[j]);
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
            // console.log(array)
        }
    }
    return array;
}

bubbleSort(numbers);
console.log(numbers);