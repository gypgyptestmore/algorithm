// 判断快乐数，取出每个位置上的数字，个十百千，进行平方和计算，如果最后计算结果是1，是快乐数

// 问题：注意对3位以上数字的拆分，注意处理循环
// 原来想使用直接取余的个位数，除法再取余的十位数等等..但是没考虑上面情况
// 正确：使用set，存储
var isHappy = function (n) {
  //   if (n <= 0) return false;
  //   let ge = n % 10;
  //   let shi = (n / 10) % 10;
  //   let bai = (n / 10 / 10) % 10;
  //   if (ge ^ (2 + shi) ^ (2 + bai) ^ (2 === 1)) {
  //     return true;
  //   }
  let seen = new Set();
  while (n != 1) {
    //进入循环，判断false
    if (seen.has(n)) {
      return false;
    }
    seen.add(n);

    let sum = 0;
    while (n > 0) {
      let digit = n % 10; //取到个位数
      sum += digit * digit; //个位数与其他位数进行相加
      n = Math.floor(n / 10); //去掉个位数，进行位数缩小
    } //循环对位数进行拆分更新
    n = sum; //更新计算后的sum
  }
  return true;
};
let n = 19;
console.log(isHappy(n));
// 时间复杂度: O(k * log n)，其中 k 是需要检查的最大 n 值
// 空间复杂度: O(k)，其中 k 是需要检查的最大 n 值
