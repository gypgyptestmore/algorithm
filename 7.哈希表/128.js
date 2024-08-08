//找出最长连续序列，返回长度
var longestConsecutive = function (nums) {
  let map = new Map();
  map.set(nums[0]);
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (map.has(nums[i] + 1)) {
      count++;
    }
    map.set(nums[i] + 1, i); //nums[i]设置键，i设置值
  }
  return count;
};