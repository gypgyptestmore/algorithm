var searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length -1
    let start = -1
    let end = -1
        // 寻找起始位置    
    while(left <= right){
        let mid = Math.floor((left+right)/2)
        if(nums[mid] === target ){
            start = mid
            right = mid - 1//在左边寻找起始位置
        }else if(target > nums[mid]){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
    // 寻找结束位置
    left = 0
    right = nums.length -1
    while(left <= right){
        let mid = Math.floor((left+right)/2)
        if(nums[mid] === target ){
            end = mid
            left = mid + 1//在左边继续寻找终点位置
        }else if(target > nums[mid]){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }

    let res = [-1,-1]
    return res
}
let nums = [1,4]
let target = 4
console.log(searchRange(nums,target))