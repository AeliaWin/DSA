function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    // Check for factors from 5 to sqrt(n)
    // Loop starts only if n is not divisible by 2 or 3
    // So, remaining possible factors are of the form 6k ± 1, where k is a positive integer
    for (let i = 5; i <= Math.sqrt(n); i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

let n = 7; // Example number to check
if (isPrime(n)) {
    console.log(n + " is a prime number.");
} else {
    console.log(n + " is not a prime number.");
}