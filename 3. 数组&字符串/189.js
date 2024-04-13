// 轮转数组

// 思路：环形替换，数组翻转
// 环形替换：(current+val)%nums.length是每个元素要走到下个元素的位置，对每个元素进行操作即可成功旋转
// 问题：需要一个变量保存被覆盖的值，以及一个记录被旋转的元素数量的变量

// var rotate = function(nums, k) {
//     let n = nums.length
//     k = k%n//实际需要移动的步数
//     let count = 0//记录已经被正确旋转的元素数量
//     for(let i = 0;count<n;i++){
//         let current = i //记录当前索引
//         let prev = nums[i]//当前值
//         do{
//             let next = (current+k)%n //下一个移动到的位置
//             let temp = nums[next]//记录即将移动到的被覆盖的值
//             nums[next] = prev//把当前值移动到相应位置
//             prev = temp//当前值也是被移动到位置值所改在的位置
//             current = next//更新当前索引为下一个位置的索引,用于下一次循环
//             count++
//         }while(i!== current)//回到起始位置就结束   
//     }
//     return nums
// };

// 数组原地翻转
var rotate = function(nums,k){
    let n = nums.length
    let k = k%n
    reverse(nums,0,n-1)//翻转整个数组
    reverse(nums,0,k-1)//翻转前k个数组
    reverse(nums,k,n-1)//翻转剩余数组
    return nums
}
function reverse(nums,start,end){
    while(start<end){
        let temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp
        start++
        end--
    }
}