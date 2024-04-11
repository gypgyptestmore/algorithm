// 根节点到叶节点数字之和
// 初步思路:DFS将到达叶节点的数字拼接再转成数字存储到数组,最后对数组求和,
// 大致正确但是拼接时要考虑多位数,存到数组中再求和会增加额外复杂度

// 思路2:DFS遍历,每到一个新节点将当前节点数值*10并加上当前节点,到达叶子节点将当前路径数字加到结果中,

var sumNumbers = function(root) {
    if(!root) return 
    let total = 0
    
    let dfs = (node,currentSum)=>{
        // 新节点将当前值*10+新节点
        currentSum = currentSum * 10 + node.val
        // 叶子节点,求总和
        if(!root.left && !root.right) {
            total += currentSum
            return 
        }
        if(node.left) dfs(node.left,currentSum)
        if(node.right) dfs(node.right,currentSum)
    }

    dfs(root,0)
    return total
};