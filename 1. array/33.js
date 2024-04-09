var search = function(nums,target){
    let left = 0
    let right = nums.length - 1
    while(left <= right){
        let mid = Math.floor((left + right)/2)
        if(nums[mid] === target){
            return mid
        }   
        // 左边有序
        if(nums[mid] >= nums[left]){
            if(nums[left] <= target && nums[mid] > target){
                right = mid-1
            }else{
                left = mid+1
            }
        }else{//右边有序
            if(nums[right] >= target && nums[mid] < target){
                left = mid + 1
            }else{
                right = mid -1
            }
        }
    }
    return -1
}
let nums = [4,5,6,7,0,1,2]
let target = 0
console.log(search(nums,target))