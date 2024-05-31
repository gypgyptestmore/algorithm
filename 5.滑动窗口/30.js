// 串联所有单词的子串
// 返回words中在s串中出现的所有排列的首字符下标

// 便利数组用for...of,
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

var findSubstring = function (s, words) {
  if (s.length === 0 || words.length === 0) {
    return [];
  }

  // 统计单词出现的次数
  const wordCount = {};
  for (const word of words) {
    // wordCount出现第一次记1，再出现就再+1
    wordCount[word] = (wordCount[word] || 0) + 1;
  }

  // 单个单词长度，总共单词长度
  const wordLen = words[0].length;
  const totalLen = wordLen * words.length;
  const res = [];

  for (let i = 0; i <= s.length - totalLen; i++) {
    // 记录结果中出现words子单词的次数
    const seen = {};
    let j = 0;
    while (j < words.length) {
      //截取当前子串中长度为wordLen的以i为索引的字符串
      const word = s.substring(i + j * wordLen, i + (j + 1) * wordLen);
      //   如果words中有word
      if (!wordCount[word]) {
        break;
      }
      // 更新该子串出现单词次数
      seen[word] = (seen[word] || 0) + 1;
      // 当前单词在 seen 中出现的次数大于它在 wordCount 中出现的次数
      if (seen[word] > (wordCount[word] || 0)) {
        break;
      }
      j++;
    }
    // 便利完words所有单词，添加索引
    if (j === words.length) {
      res.push(i);
    }
  }
  return res;
};
let s = "barfoothefoobarman",
  words = ["foo", "bar"];
console.log(findSubstring(s, words));
