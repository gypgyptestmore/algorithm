var isPalindrome = function (x) {
  let x1 = x.toString();
  let len = x1.length;
  let end = len - 1,
    start = 0;
  while (start < end) {
    if (x1[start] !== x1[end]) {
      return false
    }
    start++;
    end--;
  }
    return true
};
let x = 121;
console.log(isPalindrome(x));
