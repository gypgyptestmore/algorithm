// 跳跃游戏，贪心算法
// 思路 💩：从数组第一个开始，元素的值代表可以走的最大长度，看数组能否走到最后一个下标或者超过

// 思路：Maxjump记录当前能跳跃到的最远位置，
var canJump = function(nums) {
    let maxJump = nums[0]

    for(let i = 0;i < nums.length;i++){
        if(i>maxJump) return false
        maxJump = Math.max(maxJump,i+nums[i])//更新可以跳到的最远距离
        if(maxJump>=nums.length-1) return true
    }    
    return false
};