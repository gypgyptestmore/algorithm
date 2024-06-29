// hasOwnProperty 确保只比较对象自身的属性,而不会受到原型链上的属性的影响。
// Object.keys可以代替for...in遍历对象属性名，要获取键值用Object.entires()
function compareObjects(obj1, obj2) {
  // 获取对象属性名（键）
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  //遍历obj1 名
  for (let key of keys1) {
    if (!obj2.hasOwnProperty(key)) {
      return false;
    }
    // 获取属性值
    let value1 = obj1[key];
    let value2 = obj2[key];

    // 比较函数
    if (typeof value1 === "function" && typeof value2 === "function") {
      if (value1.toString() !== value2.toString()) {
        return false;
      }
    }
    // 嵌套对象判断
    else if (typeof value1 === "object" && typeof value2 === "object") {
      if (!compareObjects(value1, value2)) {
        return false;
      }
    }
    // 属性值不同，
    else if (value1 !== value2) {
      return false;
    }
  }
  return true;
}
