//First 1st, Find Nth ...
const array = ['hi', 'my', 'teddy'];
// teddy is most recent

array[0]; //first - O(1) time
array[array.length - 1]; //most recent - O(1) time


const array1 = [{
    tweet: 'hi',
    date: 2012
    }, {
    tweet: 'my',
    date: 2014
    }, {
    tweet: 'teddy',
    date: 2018
    }];

// Find the most recent tweet based on the date
// Time Complexity: O(n^2)

