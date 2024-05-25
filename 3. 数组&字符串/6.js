// Z字形变换
// 思路: 输入numRows行，s纵着排列，横着输出
var convert = function (s, numRows) {
  if (numRows === 1 || s.length <= numRows) {
    return s;
  }

  let rows = new Array(numRows).fill('')
  let direction = "down"; //存储方向
  let currentRow = 0; //当前符号在第几个数组

  for (let i = 0; i < s.length; i++) {
    rows[currentRow] += s[i]; //符号入数组

    if (direction === "down") {
      currentRow++; //向下，下标自加
      if (currentRow === numRows - 1) {
        //直到最后，改变方向
        direction = "up";
      }
    } else {
      currentRow--; //向上，下标自减
      if (currentRow === 0) {
        direction = "down"; //直到触顶，改变方向
      }
    }
  }
  return rows.join("");
};
