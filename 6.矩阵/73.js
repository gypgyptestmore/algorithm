// 矩阵置零：置0所在的行和列都为0
var setZeroes = function(matrix) {
    let row =new Set(),col = new Set(),m = matrix.length,n =  matrix[0].length
    // 标记所在行和列；再便利时条件标记行列都为0
    for(let i =0;i < m;i++){
        for(let j= 0;j < n;j++){
            if(matrix[i][j] === 0){
                row.add(i)
                col.add(j)
            }
        }
    }
    for(let i =0;i < m;i++){
        for(let j= 0;j < n;j++){
            if(row.has(i)||col.has(j)){
                matrix[i][j] = 0
            }
        }
    }
    return matrix
};