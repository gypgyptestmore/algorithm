var findPeakElement = function(nums) {
    let left = 0
    let right = nums.length - 1
    while(left < right){
        let mid = Math.floor((right+left)/2)
        // 中间数字小于右边元素，检查右边数组
        if(nums[mid] < nums[mid+1]){
            left = mid + 1
        }else{
        // 否则检测左边数组，如果中间元素大于下一个元素，至少左侧有一个峰值
            right = mid
        }
        return left
    }
}