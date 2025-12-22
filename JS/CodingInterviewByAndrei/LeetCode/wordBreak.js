let s = "catsandog";
let wordDict = ["cats","dog","sand","and","cat"];
function wordBreak(s, wordDict){
    for(let i = 0; i < wordDict.length; i++){
        let word = wordDict[i];
        if(s.startsWith(word)){
            let suffix = s.slice(word.length);
            console.log(suffix);
            if(suffix.length === 0){
                return true;
            }
            if(wordBreak(suffix,wordDict)){
                return true;
            }
        }
    }
    return false;
}
function wordBreak1(s,wordDict){
    if(s.length === 0){
        return true;
    }
    let dp = new Array(s.length + 1).fill(false);
    dp[0] = true;
    for(let i = 1; i <= s.length; i++){
        for(let w of wordDict){
            let start = i - w.length;
            if(start>=0 && dp[start] && s.substring(start,i)===w){
                dp[i] = true;
            }
        }
    }
    return dp[s.length];

}
console.log(wordBreak(s,wordDict));