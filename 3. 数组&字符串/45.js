//求跳到最后一个元素的最小跳跃次数
// 思路：有个book = 0标记跳跃次数，直到n = i + nums[i]


var jump = function(nums) {
    
    if(nums.length <= 1) return 0

    let jumps = 0  //记录跳跃次数
    let maxReach = 0//当前能达到的最远位置
    let currentEnd = 0//当前区间的最远位置
    for(let i = 0;i < nums.length-1;i++){
        maxReach = Math.max(maxReach,i+nums[i])
        if(i === currentEnd){
            jumps++
            currentEnd = maxReach
        }
    }
    return jumps
};