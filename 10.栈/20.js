// 有效括号

var isValid = function (s) {
  const stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let char of s) {
    //如果map中char键有对应的map[char]值，( -----> )
    // char入栈   (
    if (map[char]) {
      stack.push(char);
    } else {
      // 否则 （ 出栈
      const top = stack.pop();
      // 如果 ) !== char 出栈和 s所在字符不对应，返回false
      if (map[top] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
let s = "()[]{}";
console.log(isValid(s));
