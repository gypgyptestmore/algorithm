// 旋转矩阵。原地旋转90度输出，直接修改原二维矩阵

// 顺时针90°：沿对称轴翻转，行翻转
var rotate90 = function (matrix) {
  let n = matrix.length;
  //   主对角线翻转
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  //   再行翻转
  for (let i = 0; i < n; i++) {
    matrix[i] = matrix[i].reverse();
  }

  return matrix;
};

//旋转180°，先水平旋转再垂直旋转
var rotate180 = function (matrix) {
  let n = matrix.length;
  for (let i = 0; i < n; i++) {
    matrix[i] = matrix[i].reverse();
  }
  for (let i = 0; i < n; i++) {
    [matrix[i], matrix[n - 1 - i]] = [matrix[n - 1 - i], matrix[i]];
  }
  return matrix;
};

//旋转270°，转置矩阵后垂直翻转
var rotate270 = function (matrix) {
  const n = matrix.length;

  // 步骤 1: 转置矩阵
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // 步骤 2: 垂直翻转
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
  return matrix
};
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("旋转90°", rotate90(matrix));
console.log("旋转180°", rotate180(matrix));
console.log("旋转270°", rotate270(matrix));
