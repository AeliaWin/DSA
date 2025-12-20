function reverseString(str){
    let ans ="";
    for(let i = str.length; i > 0; i--){
        ans += str[i-1];
    }
    return ans;
}

console.log(reverseString('yoyo master'));
let str = 'yoyo master';
console.log(str[0]);
console.log(str.split("").splice(1).join(""))
console.log(str.substring(1));
console.log(str)

function reverseStringRecursive(str){
    if(str.length === 0){
        return "";
    }
    // return reverseString(str.split("").splice(1).join("")) + str[0];
    return reverseStringRecursive(str.substr(1)) + str[0]
}

console.log(reverseStringRecursive('yoyo master'));