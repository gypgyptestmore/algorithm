// 二维矩阵搜索
var searchMatrix = function(matrix, target) {
    let i = matrix.length-1
    let j = 0;
    while(i>=0 && j<matrix[0].length){
        if(matrix[i][j] === target){
            return true
        }else if(matrix[i][j] > target){
            i--
        }else{
            j++
        }
    }
    return false
};