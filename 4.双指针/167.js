//有序数组，根据求和返回下标，时间复杂度O(n),空间复杂度O(1)
var twoSum = function (numbers, target) {
  let left = 0,
    right = numbers.length - 1;
  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return []; //处理没找到的情况
};
const numbers = [2, 7, 11, 15];
const target = 26;
let a = twoSum(numbers, target);
console.log(a);
