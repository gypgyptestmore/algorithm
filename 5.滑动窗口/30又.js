var findSubstring = function (s, words) {
  if (s.length === 0 || words.length === 0) {
    return [];
  }
  // 统计单词出现次数
  let wordCount = {};
  for (let word of words) {
    wordCount[word] = (wordCount[word] || 0) + 1;
  }
  let wordLen = words[0].length;
  let totalLen = wordLen * words.length;
  let res = [];
  for (let i = 0; i < s.length - totalLen; i++) {
    let seen = {};
    let j = 0;
    while (j < words.length) {
      let word = s.substring(i + j * wordLen, i + (j + 1) * wordLen);
    //   如果没匹配到子字符串，i更新
      if (!wordCount[word]) {
        break;
      }
    //   更新结果字符串个数
      seen[word] = (seen[word] || 0) + 1;
      if(seen[word]>(wordCount[word]||0)){
        break;
      }
      j++
    }
    if(j===words.length){
        res.push(i)
    }
  }
  return res
};
