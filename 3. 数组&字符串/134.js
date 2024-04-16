// 加油站
// 没有思路,555
// 贪心算法：

var canCompleteCircuit = function(gas, cost) {
    let n = gas.length  //n个加油站
    let  curTank = 0    //当前剩余油量
    let totalTank = 0 //总剩余油量
    let start = 0   //起始加油站索引
    for(let i = 0;i < n;i++){
        totalTank += gas[i] - cost[i]     //总剩余油量+当前加油站的汽油量gas[i]
        curTank += gas[i] - cost[i]        //当前剩余油量
        // 判断当前油量是否能到达下一站
        if(curTank < 0)  {
            start = i + 1
            curTank = 0
        }
    }
    return totalTank<0?-1:start // 如果总剩余油量小于0，说明无法绕行一周，返回-1；否则返回起始加油站索引
};