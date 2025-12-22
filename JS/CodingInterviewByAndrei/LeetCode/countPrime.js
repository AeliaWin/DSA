// leetcode - 204
function countPrimes(n){
    let prime = new Array(n+1).fill(true);
    prime[0] = prime[1] = false;
    for(let i = 2; i * i <= n; i++){
        if(prime[i]){
            for(let j = i * i; j < n; j += i){
                prime[j] = false;
            }
        }
    }
    let res = [];
    for(let i = 2; i < n; i++){
        if(prime[i]){
            res.push(i);
        }
    }
    return res.length;
}
console.log(countPrimes(10));