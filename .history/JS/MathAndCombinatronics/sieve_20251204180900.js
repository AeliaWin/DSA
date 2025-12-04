// Sieve of Eratosthenes Algorithm to find all prime numbers up to a given number n
// It preprocesses and marks non-prime numbers in a boolean array
// Look up spf[n] and divide n by spf[n] repeatedly to get all prime factors of n

function sieveOfEratosthenes(n) {
    // Create a boolean array "isPrime[0..n]" and initialize
    // all entries as true. A value in isPrime[i] will
    // finally be false if i is Not a prime, else true.
    let isPrime = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime numbers
    for (let p = 2; p * p <= n; p++) {
        // If isPrime[p] is not changed, then it is a prime
        if (isPrime[p] === true) {
            // Update all multiples of p
            for (let i = p * p; i <= n; i += p) {
                isPrime[i] = false;
            }
        }
    }

    // Collecting all prime numbers
    let res = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            res.push(i);
        }
    }
    return res;
}

let n = 50; // Example number to find all primes up to
let primes = sieveOfEratosthenes(n);
console.log("Prime numbers up to " + n + ": " + primes.join(", "));