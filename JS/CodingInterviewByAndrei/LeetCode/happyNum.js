function isHappy(n){
    let seen = new Set();
    function getNumber(n){
        let output = 0;
        while (n > 0){
            let digit = n % 10;
            output += digit * digit;
            n = Math.floor(n / 10);
        }
        return output;
    }
    while(!seen.has(n)){
        seen.add(n);
        n = getNumber(n);
        if (n === 1){
            return true;
        }
    }
    return false;
}
console.log(isHappy(19));