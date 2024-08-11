// 最少数量的箭引爆气球
// 先给气球数组每第一个元素排序，
var findMinArrowShots = function (points) {
  if (points.length === 0) return 0;
  points = points.sort((a, b) => a[0] - b[0]);
  let num = points[0][1];
  let cont = 1;
  for (let i = 1; i < points.length; i++) {
    if (num < points[i][0]) {
      cont++;
      num = points[i][1];
    } else {
      num = Math.min(num, points[i][1]);
    }
  }
  return cont;
};
let points = [
  [10, 16],
  [2, 8],
  [1, 6],
  [7, 12],
];
console.log(findMinArrowShots(points));
