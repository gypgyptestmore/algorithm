//返回多数元素, 多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素
//思路💩：快慢指针，book标记次数，

// 思路：摩尔投票法，遍历数组，对每一个元素进行投票，当遇到相同元素时，票数加一，
// 当遇到不同元素时，票数减一。
// 当票数为零时，表示当前候选元素已经被抵消，需要重新选择候选元素。
// 最终剩下的候选元素就是众数

var majorityElement = function(nums) {
    let book = 1
    let candidate = nums[0]//候选元素为数组第一个元素
    for(let i = 1;i < nums.length;i++){
        if(nums[i] === candidate) {
            book++
        }else{
            book--
            if(book===0){
                candidate = nums[i+1]
                i++
                book=1
            }
        }
    }
    return candidate
};