// 判断有效数独
// 数字 1-9 在每一行只能出现一次。每一列只能出现一次。每一个以粗实线分隔的 3x3 宫内只能出现一次。
// 空白格用 '.' 表示。
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // 检查行
    for (let i = 0; i < 9; i++) {
        let row = new Set();
        for (let j = 0; j < 9; j++) {
            let num = board[i][j];
            if (num !== '.') {
                if (row.has(num)) {
                    return false;
                }
                row.add(num);
            }
        }
    }

    // 检查列
    for (let i = 0; i < 9; i++) {
        let col = new Set();
        for (let j = 0; j < 9; j++) {
            let num = board[j][i];
            if (num !== '.') {
                if (col.has(num)) {
                    return false;
                }
                col.add(num);
            }
        }
    }

    // 检查 3x3 子格
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            let subGrid = new Set();
            for (let k = 0; k < 9; k++) {
                let row = i + Math.floor(k / 3);
                let col = j + (k % 3);
                let num = board[row][col];
                if (num !== '.') {
                    if (subGrid.has(num)) {
                        return false;
                    }
                    subGrid.add(num);
                }
            }
        }
    }

    return true;
};
let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
console.log(isValidSudoku(board));
