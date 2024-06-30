// 整理字符串 数组 中一样的整合为一个数组。一维数组变为二维数组
var groupAnagrams = function (strs) {
  if (strs.length <= 1) {
    return [strs];
  }
  let groupMap = new Map();
  //怎么把字符相同的字符串整理到一个数组中
  for (let str of strs) {
    // 对字符串数组中的每个字符串进行排序，分割为字符串排序后再转化为数组
    // 设置键
    let key = str.split("").sort().join("");
    if (!groupMap.has(key)) {
      groupMap.set(key, []);
    }
    groupMap.get(key).push(str);
  }
  return Array.from(groupMap.values());
};
var strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));

// var groupAnagrams = function(strs) {
//     let groupMap = new Map();

//     for (let str of strs) {
//         let key = str.split('').sort().join('');
//         if (!groupMap.has(key)) {
//             groupMap.set(key, []);
//         }
//         groupMap.get(key).push(str);
//     }

//     return Array.from(groupMap.values());
// };
