const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// time - O(n^2)
// space - O(1);
function selectionSort(array) {
    //Code Here
    for(let i = 0; i < array.length; i++){
        // let smallest = array[i];
        const temp = array[i]
        let index = i;
        for(let j = i+1; j< array.length; j++){
            if(smallest > array[j]){
                // smallest = array[j];
                index = j;
            }
        }
        // array[index] = array[i];
        // array[i] = smallest;

        array[i] = array[index];
        array[index] = temp;
    }
    return array;
}

console.log(selectionSort(numbers));
// console.log(numbers);