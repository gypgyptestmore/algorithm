// 路径总和
// 给出目标值,寻找树中是否有一条路径总和为目标值
// 思路×:先序遍历到节点末端,分别记录到数组,对数组求和进行判断,空间复杂度高

// 思路2:DFS遍历二叉树,同时记录当前路径上节点值的和,叶子节点时判断和与目标数值.
// 存在左子树就递归调用左子树,存在右子树就递归调用右子树


var hasPathSum = function(root, targetSum) {
    if(!root) return null
    let dfs = (node,currentSum)=>{
        currentSum += node.val
        if(!node.left && !node.right) return (targetSum === currentSum)
        if(node.left && dfs(node.left,currentSum))  return true
        if(node.right && dfs(node.right,currentSum) )  return true
        // 左右子树都不满足,返回false
        return false
    }
    return dfs(root,0)
};

