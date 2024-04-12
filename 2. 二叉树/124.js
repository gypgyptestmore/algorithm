// 二叉树的最大路径和
// 思路	✖️ ：前序遍历，但是每个节点都作作为根节点计算与左右节点的和，最终找到最大路径和
// 不是仅仅是以根节点和左右子节点的和，进行最大和比较
// 思路：递归遍历，比较左右子树，选择大数值与根加和，继续递归选择

var maxPathSum = function(root) {
    if(!root) return 0
    let maxSum = -Infinity 
    let traverse = (node)=>{
        if(!node) return 0

        // 递归计算左右子树的最大路径和子树路径和小于0取0，且不经过该子树
        let leftSum = Math.max(traverse(node.left),0)
        let rightSum = Math.max(traverse(node.right),0)
        
        // 更新最大路径和
        maxSum = Math.max(maxSum,node.val+leftSum+rightSum)

        return node.val + Math.max(leftSum,rightSum)
    }
    traverse(root)
    return maxSum
};