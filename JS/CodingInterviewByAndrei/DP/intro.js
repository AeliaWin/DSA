function addTo80(n){
    return n+80;
}

// console.log(addTo80(5));

// let cache = {}; //should be inside the func
function memorizedAddTo80(){
    let cache = {};
    return function (n) {
        if (n in cache){
            return cache[n];
        } else {
            console.log('long time');
            cache[n] = n + 80;
            return cache[n];
        }
    }
}
// console.log('1',memorizedAddTo80(5));
// console.log('2',memorizedAddTo80(5));
const memorized = memorizedAddTo80();
console.log(memorized(5));
console.log(memorized(5));