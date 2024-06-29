// 单词规律，建立映射
// 和205相比，要吧单词划分为类似字符那样，去与参数1做映射

var wordPattern = function (pattern, s) {
  //   let s2t = {};
  //   let t2s = {};
  let s2t = new Map();
  let t2s = new Map();

  let word = s.split(" ");

  //  检查同构的长度
  if (pattern.length !== word.length) return false;
  for (let i = 0; i < pattern.length; i++) {
    if (
      (s2t[pattern[i]] && s2t[pattern[i]] !== word[i]) ||
      (t2s[word[i]] && t2s[word[i]] !== pattern[i])
    ) {
      return false;
    }
    // 建立同构
    // s2t[pattern[i]] = word[i];
    // t2s[word[i]] = pattern[i];
    s2t.set(pattern[i], word[i]);
    t2s.set(word[i], pattern[i]);
  }
  return true;
};
let pattern = "aaa";
let s = "aa aa aa aa";
let a = wordPattern(pattern, s);
console.log(a);
