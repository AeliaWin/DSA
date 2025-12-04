function primeFact(n) {
    // Array to store smallest prime factor for every number
    let spf = new Array(n + 1);
    for (let i = 1; i <= n; i++) {
        spf[i] = i; // Initialize spf[i] to i
    }
    // Using Sieve of Eratosthenes to fill spf[]
    for (let i = 2; i * i <= n; i++) {
        if (spf[i] === i) { // i is prime
            for (let j = i * i; j <= n; j += i) {
                if (spf[j] === j) {
                    spf[j] = i; // Update spf[j] to the smallest prime factor i
                }
            }
        }
    }
    // Collecting all prime factors of n using spf[]
    let factors = [];
    while (n > 1) {
        factors.push(spf[n]);
        n = Math.floor(n / spf[n]);
    }
    return factors;
}