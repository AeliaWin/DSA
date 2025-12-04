function powMod(base, exponent, modulus) {
    let result = 1;

    while (exponent >= 1) {
        // If exponent is odd, multiply base with result
        if (exponent % 2 === 1) {
            result = (result * base) % modulus;
            exponent -= 1;
        }
        // exponent must be even now
        base = (base * base) % modulus;
        exponent /= 2;
    }
    return result;
}

let base = 5;
let exponent = 3;
let modulus = 13;
console.log(`(${base}^${exponent}) mod ${modulus} = ${powMod(base, exponent, modulus)}`);