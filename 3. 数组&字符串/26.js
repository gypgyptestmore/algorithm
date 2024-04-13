// 有序数组原地去重,返回长度
// 思路💩：存储每个首次出现数字，再标记次数，次数大于1使用splice【增加时间复杂度】

// 使用双指针,当前元素与前一个元素不同，则将 slow 指针向后移动一位，将当前元素放入 slow 指针指向的位置，从而实现了原地去重的效果。

var removeDuplicates = function(nums) {
    if(!nums) return 0
    let slow = 0
    for(let fast = 1;fast < nums.length;fast++){
        if(nums[fast] !== nums[slow]){
            slow++
            nums[slow] = nums[fast]//边界
        }
    }
    return slow+1
};