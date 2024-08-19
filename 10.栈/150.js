// 逆波兰式求值
var evalRPN = function (tokens) {
  let stack = [];
  for (let token of tokens) {
    if (isNaN(parseInt(token))) {
      let a = stack.pop();
      let b = stack.pop();
      switch (token) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          stack.push(Math.trunc(a / b));
          break;
      }
    }else{
        stack.push(parseInt(token))
    }
  }
  return stack.pop()
};
let tokens = ["2", "1", "+", "3", "*"];
console.log(evalRPN(tokens));
