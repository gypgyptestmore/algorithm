// nums中找出和是target的两个数字下
//in 会检查原型链上的属性。hanOwnProperty合hasOwn会检查自身属性，不包括原型链
var twoSum = function (nums, target) {
  let numDict = {};
  let complement = 0;
  for (let i in nums) {
    complement = target - nums[i];
    if (numDict.hasOwnProperty(complement)) {
      //hasOwnProperty只能判断对象自身属性，不包括原型链
      return [numDict[complement], i];
    }
    numDict[nums[i]] = i; //存入i键，就是存入下标
  }
  return [];
};
let nums = [2, 7, 11, 15],
  target = 9;
console.log(twoSum(nums, target));
