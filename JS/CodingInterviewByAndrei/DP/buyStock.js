// Leetcode 121
// naive apporach
function buySellStock(prices){
    let maxProfit = 0;
    for(let i = 0; i < prices.length; i++){
        for(let j = i+1; j < prices.length; j++){
            if(prices[i] < prices[j]){
                let complement = prices[j] - prices[i];
                if(maxProfit < complement){
                    maxProfit = complement;
                }
            }
        }
    }
    return maxProfit;
}

// recursive apporach
let cache = {};
function buySellStock1(prices){
    let maxProfit = 0;
    let minProfit = prices[0];
    console.log('before loop',minProfit)
    for (let i = 1; i < prices.length; i++){
        console.log('during loop',i, prices[i]);
        if(minProfit > prices[i]){
            console.log(minProfit,prices[i])
            minProfit = prices[i];
        }
        if(prices[i] > minProfit){
            console.log(minProfit,prices[i])
            let complement = prices[i] - minProfit;
            if (maxProfit < complement){
                maxProfit = complement;
            }
        }
    }
    return maxProfit;
}

function buySellStock2(prices){
    if (prices.length === 0){
        return 0;
    }
    let profit = prices[1] - prices[0];
    let restProfit = buySellStock2(prices.slice(1,prices.length));
    if (profit < 0){
        profit = 0;
    }
    if (restProfit > profit){
        return restProfit;
    } else {
        return profit;
    };
}
let prices = [7,1,5,3,6,4];
console.log(prices.slice(1,prices.length));
console.log(buySellStock2(prices));