// time - O(n)
//space - O(n)
function LongestWord(sen) { 
  const regex = new RegExp('[a-zA-Z+]')
  let words = sen.split(" ");
  let idx = 0;
  let longest = 0;
  for(let i = 0; i< words.length; i++){
    let letters = words[i].split("").filter((char)=> char.match(regex))
    let tempLength = letters.length;
    if(longest < tempLength){
      longest = tempLength;
      idx = i;
    }
  }

  // code goes here  
  return words[idx]; 

}

function LongestWord1(sen){
    let newSen = sen.match(/[a-zA-Z]+/gi);
    console.log(newSen)
    let sortedByLength = newSen.sort(function(a,b){
        return b.length - a.length;
    })
    return sortedByLength[0];
}

   
// keep this function call here 
let sen = "I love dogs";
console.log(LongestWord1(sen));