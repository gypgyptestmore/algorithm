// 检查对称二叉树
// 根节点左右节点为空 1。根节点左或右节点不存在或两个不相等 0
// 层序遍历将二叉树放入数组，对比两个左右节点，
// 判断左的左对右的右。左的右对右的左。进行递归
var isSymmetric = function(root) {
    function checkSymmetric(left,right){
        if(!left && !right) return true
        if(!left || !right || left.val != right.val) return false
        return checkSymmetric(left.left,right.right) && checkSymmetric(left.right,right.left)
    }
    if(!root) return true
    return checkSymmetric(root.left,root.right)
};
