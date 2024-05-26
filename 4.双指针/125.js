// 验证回文字符串:不管大小写,移除所有非字母
// 全部转为小写,去除所有非字母(正则),对称对比字符

var isPalindrome = function (s) {
  if (s.length <= 1) return true;
  a = s.replace(/[^0-9a-zA-Z]/g, ""); //取出所有字母
  a = a.toLowerCase(); //转为小写
  // 通过长度是奇数还是偶数(偶:位运算是0),决定中间数取值,
//   let lenn = (s.length & 1) === 0 ? s.length / 2 : Math.floor(s.length / 2);
  // 双指针
  let left = 0,
    right = a.length - 1;
  while (left <= right) {
    if(a[left]!==a[right]){
        return false
    }
    left++
    right--
  }
  return true;
};
const s = "A man, a plan, a canal: Panama";
const q = isPalindrome(s);
console.log(q);
