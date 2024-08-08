// 合并区间
// 根据区间首数字大小对区间排序。
// 创建新数组，后者的老大>前者的老二合并后者的。
var merge = function (intervals) {
  if (intervals.length === 0) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  let merge = [];
  for (let interval of intervals) {
    if (merge.length === 0 || interval[0] > merge[merge.length - 1][1]) {
      merge.push(interval);
    } else {
      merge[merge.length - 1][1] = Math.max(
        interval[1],
        merge[merge.length - 1][1]
      );
    }
  }
  return merge;
};

let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(merge(intervals));
