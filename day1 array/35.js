/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 公司没网了，回家继续改代码
var searchInsert = function (nums, target) {
    let length = nums.length;
    let high = length - 1;
    let low = 0;
    while (low <= high) {
        let mid = Math.floor((high + low) / 2)
        if (nums[mid] > n) {
            high = nums[mid]
        } else if (nums[mid] < n) {
            low = nums[mid]
        } else if (nums[mid] == n) {
            return mid
        }
    }
};