// 左端点比右端点小，就是有排序的，目标值在区间内搜索有序地一遍
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1
    while(left <=  right){
        let mid = Math.floor((left+right)/2)
        if(nums[mid] === target){
            return mid
        }else if(nums[mid-1] < nums[mid+1] && target <= nums[mid-1]){
            right = mid-1
        }else{
            left = mid + 1
        }
    }
    console.log(-1)
    return -1
};
let nums = [4,5,6,7,0,1,2]
let target = 0
console.log(search(nums,target))
