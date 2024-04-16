// 接雨水，贪心算法，双指针

var trap = function(height) {
    let n = height.length
    if(n===0) return 0
    let left = 0 , right = n - 1
    let leftMax = 0,rightMax = 0
    let ans = 0
    while(left < right){
        if(height[left] < height[right]){
            if(height[left] > leftMax){
                leftMax = height[left]
            }else{
                ans += leftMax - height[left]
            }
            left++
        }else{
            if(height[right]>rightMax){
                rightMax = height[right]
            }else{
                ans += rightMax - height[right]
            }
            right--
        }
    }
    return ans
};