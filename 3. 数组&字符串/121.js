// 买卖股票的最佳时期,计算利润
// 思路：找到数组中最小数下标，最小数找到后在后面找到大数与最小数求差，更新差，如果数组递减返回0，
// 可以使用math.min以及math.max

var maxProfit = function(prices) {
    if(prices.length <= 1) return 0

    let minPrice = prices[0]
    let maxProfit = 0
    for(let i=0;i<prices.length;i++){
        minPrice = math.min(minPrice,prices[i])
        maxProfit = math.max(maxProfit,prices[i]-minPrice)
    }

    return maxProfit    
};