function printAllNumbersThenAllPairSums(numbers) {

    console.log('These are the numbers:');
    numbers.forEach(function(number) {
        console.log(number); //O(n)
    });

    console.log('And these are their sums:');
    numbers.forEach(function(firstNumber) {
        numbers.forEach(function(secondNumber) {
            console.log(firstNumber + secondNumber); //O(n^2)
        });
    });
}


printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]);

// Big O Notation: O(n + n^2) => O(n^2)
// Based on the rule 4 : "Drop Non-Dominants"
