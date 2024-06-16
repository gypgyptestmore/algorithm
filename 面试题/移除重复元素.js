function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    const maxCount = 2;
    let slow = 0;

    for (let fast = 0; fast < nums.length; fast++) {
        if (slow < maxCount || nums[fast] !== nums[slow - maxCount]) {
            nums[slow] = nums[fast];
            slow++;
        }
    }

    return slow;
}

// 示例输入输出
let nums = [1, 1, 1, 2, 2, 2, 3];
let newLength = removeDuplicates(nums);
console.log(newLength); // 输出: 5
console.log(nums.slice(0, newLength)); // 输出: [1, 1, 2, 2, 3]
