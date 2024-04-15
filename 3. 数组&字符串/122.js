//可以买卖多次
// 思路💩：计算两次，写不出来
// 贪心算法：total计算总利润，只要今天比昨天高就求利润


var maxProfit = function(prices) {
    let totalPrices = 0
    for(let i = 1;i < prices.length;i++){
        if(prices[i] > prices[i-1]){
            totalPrices += prices[i]-prices[i-1]
        }
    }
    return totalPrices
};