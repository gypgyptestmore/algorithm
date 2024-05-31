// 无重复字符的最长子串
// 找出重复字符，再在旁边找到不重复的子串
var lengthOfLongestSubstring = function (s) {
  let left = 0,
    right = 0,
    maxLen = 0;
  let charSet = new Set(); //无重复字符的集合

  while (right < s.length) {
    if (!charSet.has(s[right])) {
      charSet.add(s[right]);
      maxLen = Math.max(maxLen, right - left + 1);
      right++;
    } else {
      charSet.delete(s[left]);
      left++;
    }
  }
  console.log(maxLen);
};
let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s))