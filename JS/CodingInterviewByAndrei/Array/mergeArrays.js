// merge two sorted arrays
// Input: [0,3,4,31] [4,6,30]
// Output: [0,3,4,4,6,30,31]


function mergeArray(arr1,arr2){
    let merged = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];

    let i = 1;
    let j = 1;

    // check input
    if(arr1.length === 0){
        return console.log(arr2);
    }

    if(arr2.length === 0){
        return console.log(arr1);
    }

    while(arr1Item || arr2Item){
        if(!arr2Item || arr1Item < arr2Item){
            merged.push(arr1Item);
            arr1Item = arr1[i];
            i++;
        } else {
            merged.push(arr2Item);
            arr2Item = arr2[j];
            j++;
        }
    }
    return console.log(merged);

}
console.log(undefined < 6) // false
console.log(undefined > 6) // false
mergeArray([0,3,4,30], [4,6,31]);

