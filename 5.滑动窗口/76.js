// 返回 s 中涵盖 t 所有字符的最小子串
var minWindow = function (s, t) {
  let left = 0,
    right = 0;
  let seen = {};
  let minLen = Number.MAX_SAFE_INTEGER,
    start = 0;
  let missing = t.length;

  //   记录t中每个字符的个数
  for (let i = 0; i < missing; i++) {
    seen[t[i]] = (seen[t[i]] || 0) + 1;
  }

  // 右指针右划
  while (right < s.length) {
    // s[right]是t中字符，更新t字符对应个数和t长度
    if (seen[s[right]] !== undefined) {
      seen[s[right]]--;
      if (seen[s[right]] >= 0) {
        missing--;
      }
    }

    // t长度0，便利完，s包含了t中所有字符
    while (missing === 0) {
      // 当前滑动窗口的长度，更新最小子串长度和起始位置
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        start = left;
      }

      //   收缩左边界
      if (seen[s[left]] !== undefined) {
        seen[s[left]]++;
        if (seen[s[left]] > 0) {
          missing++;
        }
      }
      left++;
    }
    right++;
  }
  return minLen = Number.MAX_SAFE_INTEGER ? "" : s.substring(start, start + minLen);
};
