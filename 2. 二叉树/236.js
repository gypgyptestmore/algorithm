// 二叉树的最近公共祖先LCA
// 思路：没思路
// 思路：如果在左右子树或者没有/(仅有)根节点找到了目标节点，当前节点是LCA，
// 递归左右子树，如果只在一侧找到目标节点，返回该侧结果
var lowestCommonAncestor = function(root, p, q) {
    if(!root || root === p || root === q) return root
    let left = lowestCommonAncestor(root.left,p,q)
    let right = lowestCommonAncestor(root.right,p,q)
    if(left&&right) return root
    return left?left:right
};