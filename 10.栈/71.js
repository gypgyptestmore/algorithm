//化简路径
// 字符串 所有字符转为数组：
// str.split('').map(char=>char)
// [...str]
// Array.from(str)

// 数组 转为字符（元素中间不加任何元素）
// arr.join('')
// arr.toString()
// arr.map(String).join('')
// JSON.stringify(arr)

var simplifyPath = function (path) {
  let arrs = path.split("/");
  let result = [];
  for (let arr of arrs) {
    if (arr === "" || arr === ".") {
      continue;
    } else if (arr === "..") {
      result.pop();
    } else {
      result.push(arr);
    }
  }
  result = "/" + result.join("/");
  return result;
};
// let path = "/home//foo/"
// let path = "/../"
// let path =  "/home/"
let path = "/a/./b/../../c/";
console.log(simplifyPath(path));
