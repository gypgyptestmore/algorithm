// 1. 记录字符串 t 字符出现次数
let seen = {};
for (let i = 0; i < t.length; i++) {
  seen[t[i]] = (seen[t[i]] || 0) + 1;
}

// 2. Set的 has() 方法的时间复杂度是 O(1)
// 可以自动去重, 可以非常紧凑地存储这些数字。
let row = new Set();
row.has(num); //判断
row.add(num); //添加
