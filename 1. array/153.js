// 旋转数组找最小值
// 寻找拐点
var findMin = function(nums) {
    let left = 0
    let right = nums.length -1
    let target = nums[0]
    while(left<= right){
        let mid = Math.floor((left + right)/2)
        //拐点mid-1
        if(nums[mid] < nums[mid-1]){
            target = nums[mid]
            break;
        }
        if(nums[right]<nums[mid]){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
    return target
};
let nums = [3,4,5,1,2]
console.log(findMin(nums))