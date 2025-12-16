let user = {
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function() {
        console.log('ahhhhhhhhhhhhh!');
    }
}

console.log(user.age) //O(1)

user.spell = 'abra kadabra'; //O(1)

console.log(user)
console.log(user.scream()) //O(1)

// create a map
// map allows any data type as a key
// it maintain insertion order
const a = new Map();

// set
// it is similar to map
// it only stores the key, not value
const b = new Set();