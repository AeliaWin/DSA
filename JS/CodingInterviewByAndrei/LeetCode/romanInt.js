function romanToInt(s){
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let total = 0;
    let symbols = s.split("");
    let i = 0;
    while( i < symbols.length){
        let currentSymbol = symbols[i];
        if(currentSymbol === 'I'){
            if(symbols[i+1] === 'V'){
                total += romanMap['V'] - romanMap['I'];
                i += 2;
            } else if(symbols[i+1] === 'X'){
                total += romanMap['X'] - romanMap['I'];
                i += 2;
            } else {
                total += romanMap['I'];
                i++;
            }
        } else if (currentSymbol === 'X'){
            if(symbols[i+1] === 'L'){
                total += romanMap['L'] - romanMap['X'];
                i += 2;
            } else if(symbols[i+1] === 'C'){
                total += romanMap['C'] - romanMap['X'];
                i += 2;
            } else {
                total += romanMap['X'];
                i++;
            }
        } else if (currentSymbol === 'C'){
            if(symbols[i+1] === 'D'){
                total += romanMap['D'] - romanMap['C'];
                i+=2;
            } else if(symbols[i+1] === 'M'){
                total += romanMap['M'] - romanMap['C'];
                i+=2;
            } else {
                total += romanMap['C'];
                i++;
            }
        } else if(romanMap[currentSymbol]){
            console.log(romanMap[currentSymbol]);
            total += romanMap[currentSymbol]
            i++;
        }
    }
    return total;
}

console.log(romanToInt("MCMXCIV"));