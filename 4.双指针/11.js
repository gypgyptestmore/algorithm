//盛水最多的容器
// 双指针，不断更新max，最后返回max
var maxArea = function(height) {
    let max = 0
    let left = 0,right = height.length-1
    let width = 0
    let xiao = 0
    let area = 0
    while(left < right){
        width = right - left
        xiao = Math.min(height[right], height[left])
        area = xiao*width
        max = Math.max(max,area)
        if(height[left]<height[right]){
            left++
        }else{
            right--
        }
    }
    return max
};
