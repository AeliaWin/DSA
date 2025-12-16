// reverse a string
// 'Hi My name is Andrei'
// Output: ierdnA si eman yM iH

// convert string to an array
// loop through from end to start

// time - O(n^2)
// space - O(n^2)
function reverseString(str){
    let newArray = str.split(" ");
    console.log(newArray);
    let newString = "";

    for(let i = newArray.length-1; i >= 0; i--){
        let chars = newArray[i].split("");
        for(let j = chars.length-1; j >= 0; j--){
            newString += chars[j];
        }
        newString += " ";
    }
    console.log(newString);
}

// reverseString('Hi My name is Andrei');


// time - O(n)
// space - O(n)
function reverseString1(str){
    let newArray = str.split("");
    let reversed = "";
    for(let i = newArray.length-1; i >=0; i--){
        reversed += newArray[i];
    }
    console.log(reversed);
}

// reverseString1('Hi My name is Andrei');

// time - O(n)
// space - O(n)
function reverseString2(str) {
    // check input
    if (!str || str.length <2 || typeof str !== 'string') {
        return str;
    }

    const backward = [];
    const totalLength = str.length-1;
    for(let i = totalLength; i >=0 ; i--){
        backward.push(str[i])
    }

    // return backward.toString();
    return backward.join('');
}

// using built in method
function reverseString3(str){
    if (!str || str.length <2 || typeof str !== 'string'){
        return str;
    }
    return str.split("").reverse().join("");
}

// es6 syntax
const reverseString4 = str => str.split("").reverse().join("");
const reverseString5 = str => [...str].reverse().join("");


// console.log(reverseString2('Hi My name is Andrei'));
console.log(reverseString5('Hi My name is Andrei'));


