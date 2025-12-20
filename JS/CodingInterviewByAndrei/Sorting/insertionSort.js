const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// time - O(n^2)
// space - O(1);

function insertionSort(array) {
   //Code Here
   for(let i = 1; i < array.length; i++){
        let compareValue = array[i];
        for(let j = i-1; j >= 0; j--){
            if(compareValue < array[j]){
                array[j+1] = array[j];
                array[j] = compareValue;
            }
        }
   }
   return array;

}

console.log(insertionSort(numbers));