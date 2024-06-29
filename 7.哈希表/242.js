// 判断两个字符串中的字符是否完全一致
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let arrs = new Array(26).fill(0);
  // 遍历s中字符，根据ASCII减去a的ASCII得到在26个字母表中的索引0-25
  //   字符计数
  for (let i = 0; i < s.length; i++) {
    arrs[s.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  for (let j = i; j < t.length; j++) {
    // 对应字符标记自减
    let index = t.charCodeAt(j) - "a".charCodeAt(0);
    arrs[index]--;

    if (arrs[index] < 0) {
      return false;
    }
  }
//   检查所有字符是不是0
return arrs.every(c=>c===0)
};
