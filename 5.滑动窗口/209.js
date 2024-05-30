// 返回数组中子元素和≥target 长度最小的子数组的长度
// 左右指针，滑动窗口，
var minSubArrayLen = function (target, nums) {
  let left = 0,
    right = 0,
    minLen = Infinity, //最短长度初始化为正无穷
    sum = 0;

  while (right < nums.length) {
    //当前元素加入滑动窗口
    sum += nums[right];

    //和大于目标和
    while (sum >= target) {
      // 最短长度更新，左边右移
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left];
      left++;
    }
    // 右边右移
    right++;
  }
  //   最短长度没变就是0，变了更新值
  return minLen === Infinity ? 0 : minLen;
};
let nums = [1, 4, 4];
let target = 4;
console.log(minSubArrayLen(target, nums));
