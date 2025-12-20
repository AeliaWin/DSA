const letters = ['a','d','z','e','r','b'];
const basket = [2,65,34,2,1,7,8];

console.log(letters.sort());
console.log(basket.sort()); 
//transform num to string '65'.charCodeAt(0);

// if we need to sort the string, 
// if it is the english we can use sort()
// but if it is another language we can use localeCompare();

console.log(basket.sort(function(a,b){
    return a - b;
}))
// there will be a lot of data to sort
// important to know some sorting algorithms
// different algorithms have different performance