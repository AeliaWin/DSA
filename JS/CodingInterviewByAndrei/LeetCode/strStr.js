// Leetcode 28
let needle = "a";
let haystack = 'a';

function strStr(haystack,needle){
    return haystack.indexOf(needle);
}

function strStr1(haystack,needle){
    if(needle.length > haystack.length){
        return -1;
    }
    for(let i = 0; i <= haystack.length - needle.length; i++){
        let newString = haystack.slice(i,i+needle.length);
        console.log(newString)
        if(newString === needle){
            return i;
        }
    }
    return -1;
}

console.log(strStr1(haystack,needle));