function firstUniqChar(s){
    let seen = new Map();
    seen.set(s[0],0)
    // console.log(seen.get(s[0]))
    for(let i = 1; i < s.length; i++){
        if(seen.has(s[i])){
            seen.set(s[i], seen.get(s[i])+1);
        }else{
            seen.set(s[i],0);
        }
    }
    console.log(seen);
    let idx = -1;
    for(let [key,value] of seen){
        if(value === 0){
            idx = s.indexOf(key);
            break;
        }
    }
    return idx;
}

console.log(firstUniqChar("leetcode"))