// 顺时针返回矩阵

var spiralOrder = function (matrix) {
  if (!matrix) return [];
  let left = 0,
    right = matrix[0].length - 1;
  let top = 0,
    bottom = matrix.length - 1;
  let result = [];
  while (left <= right && top <= bottom) {
    // 最上侧从左至右
    for (let col = left; col <= right; col++) {
      result.push(matrix[top][col]);
    }
    top++;
    // 最右侧从上到下
    for (let row = top; row <= bottom; row++) {
      result.push(matrix[row][right]);
    }
    right--;

    // 到最右下,往左走
    if (top <= bottom) {
      for (let col = right; col >= left; col--) {
        result.push(matrix[bottom][col]);
      }
      bottom--;
    }
    // 到最左下,往上走
    if (left <= right) {
      for (let row = bottom; row >= top; row--) {
        result.push(matrix[row][left]);
      }
      left++;
    }
  }
  return result;
};
let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
console.log(spiralOrder(matrix));
