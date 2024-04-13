// 删除有序数组重复项 元素最多只出现两次
// 思路：快慢指针？book标记

var removeDuplicates = function(nums) {
    if(!nums.length) return 0
    let slow = 1//第一个元素一定保留
    let book = 1//标记元素
    for(let fast = 1; fast < nums.length;fast++){
        if(nums[fast] === nums[fast-1]){//和前一个元素一样，标记为2
            book ++
        }else{ //不同元素标记是1
            book = 1
        }

        if(book <= 2){//标记是1,2的快指针赋值慢指针前移
            nums[slow] = nums[fast]
            slow++
        }
    }
    return slow
};