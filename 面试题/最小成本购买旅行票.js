function mincostTickets(days, costs) {
    // dp数组长度为最后一天加1，初始化为无穷大表示未计算
    const lastDay = days[days.length - 1];
    let dp = new Array(lastDay + 1).fill(Infinity);
    dp[0] = 0; // 第0天没有旅行，不需要买票

    // 设置旅行日的dp初值
    for (let day of days) {
        dp[day] = 0;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (dp[i] === Infinity) {
            // 如果不是旅行日，继承前一天的花费
            dp[i] = dp[i - 1];
        } else {
            // 动态规划转移方程，考虑三种购买票的可能
            dp[i] = Math.min(
                dp[i - 1] + costs[0], // 前一天的花费加上1天票价
                dp[Math.max(0, i - 7)] + costs[1], // 7天前的花费加上7天票价
                dp[Math.max(0, i - 30)] + costs[2] // 30天前的花费加上30天票价
            );
        }
    }

    // 最后一天的dp值即为答案
    return dp[lastDay];
}

// 示例
console.log(mincostTickets([1,4,6,7,8,20], [2,7,30]));
