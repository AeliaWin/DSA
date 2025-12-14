function boooo(n) {
    for (let i = 0; i < n.length; i++) {
        console.log('Boo!');
    }
}

boooo([1, 2, 3, 4, 5]); 

// Time Complexity: O(n)
// Space Complexity: O(1)
// Explanation: The function iterates through the input array once, printing "Boo!" for each element. 
// The time complexity is linear, O(n), because the time taken grows linearly with the size of the input array. 
// The space complexity is constant, O(1), since no additional space is used that grows with the input size.
// let i = 0; // Space used by the variable 'i'

function arrayOfHiNTimes(n) {
    let hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }
    return console.log(hiArray);
}

arrayOfHiNTimes(6);

// Time Complexity: O(n)
// Space Complexity: O(n)
// Explanation: The function creates an array of size 'n' and fills it with the string "hi".