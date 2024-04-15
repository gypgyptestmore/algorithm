// 出自身以外数组的乘积
var productExceptSelf = function(nums) {
    let  n = nums.length
    let answer = new Array(n).fill(1) 
    let leftProduct = 1
    let rightProduct = 1
    // 第一次遍历存储左边所有乘积
    for(let i = 0;i < n;i++){
        answer[i] *= leftProduct
        leftProduct *= nums[i]
    }
    // 第二次遍历存储右边所有乘积
    for(let i = n - 1;i >= 0;i--){
        answer[i]*= rightProduct
        rightProduct *= nums[i]
    }
    return answer
};