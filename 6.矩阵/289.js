// 生命游戏
var gameOfLife = function (board) {
  let m = board.length,
    n = board[0].length;
  //存储每个细胞状态
    const copyBoard = JSON.parse(JSON.parse(board))
  //8个方向活细胞状态
  const directions = [
    [0,1],[0,-1],[1,0],[-1,0],
    [1,1],[-1,-1],[-1,1],[1,-1]
  ]
  //计算活细胞数量
  let countLiveNeighbors = (r,c)=>{
    let count = 0;
    // dr,dc是行，列偏移量
    // nr,nc是当前细胞周围行，列坐标
    for(let [dr,dc] of directions){
        let nr = r+dr
        let nc = c+dc
        if(nr>=0&&nr<m&&nc>=0&&nr<n&&copyBoard[nr][nc]===1){
            count++
        }
    }
    return count
  }

//遍历棋盘，更新每个细胞状态 
  for(let i = 0;i<m;i++){
    for(let j = 0;j < n;j++){
        let liveNeighbors = countLiveNeighbors(i,j)
        if(copyBoard[i][j]===1){
            if(liveNeighbors<2||liveNeighbors>3){
                board[i][j] = 0
            }
        }else{
            if(liveNeighbors===3){
                board[i][j]=1
            }
        }
    }
  }
};
