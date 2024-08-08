//汇总区间，
// 思路：比较相邻元素是否在连续范围，借助start添加范围
// 感觉快慢指针更好用，在下面有快慢指针

//中间使用->，存入字符串，再放入数组
// var summaryRanges = function (nums) {
//   let result = [];
//   let start = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (i + 1 < nums.length && nums[i] + 1 === nums[i + 1]) {
//       continue;
//     } else {
//       if (start === i) {
//         result.push(nums[start].toString());
//       } else {
//         result.push(nums[start] + "->" + nums[i]);
//       }
//       start = i + 1;
//     }
//   }
//   return result;
// };
var summaryRanges = function (nums) {
  let fast = 0,
    slow = 0;
  let result = [];
  while (fast < nums.length) {
    if (fast + 1 < nums.length && nums[fast + 1] - nums[fast] === 1) {
      fast++;
    } else {
      if (slow === fast) {
        result.push(nums[fast].toString());
      } else {
        result.push(`${nums[slow]}->${nums[fast]}`);
      }
      slow = fast + 1;
      fast++;
    }
  }
  return result;
};
let nums = [0, 1, 2, 4, 5, 7];
console.log(summaryRanges(nums));
