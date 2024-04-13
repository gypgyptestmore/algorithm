// 移除元素并返回特定长度,要求原地修改数字,
// 思路：找到元素后pop，再计算length与返回原数组
var removeElement = function(nums, val) { 
    // 错误点：foreach开始就确定了数组长度，中间修改不会动态调整自己行为，  
    // nums.forEach(element => {
    //     if(element === val) nums.pop()
    // });

    // 1. splice方法
    // for(let i = nums.length;i >= 0 ;i--){
    //     if(nums[i]===val) {
    //         nums.splice(i,1)
    //     }
    // }
    // return nums.length


    // 2.快慢指针,快指针指向的数字与我们要找的数字不同，我们将快指针指向的数字复制到慢指针的位置，然后同时移动快指针和慢指针。
    let slow = 0
    for(let fast = 0;fast < nums.length;fast++){
        if(nums[fast] !== val){
            nums[slow] = nums[fast]
            slow++ 
        }
    }
    return slow


};