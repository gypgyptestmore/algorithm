// 从前序遍历和中序遍历构造二叉树，输出层序遍历的每个节点
// 递归
// 先从前序遍历第一个确定根节点，在中序遍历找到根节点，左边是左子节点部分。右边是右子节点部分
// 递归调用函数构造左子树和右子树，返回根节点


var buildTree = function(preorder, inorder) {
    if(!preorder.length || !inorder.length) return null
    let rootVal = preorder[0]
    let root = new TreeNode(rootVal) //设置根节点
    let index = inorder.indexof(rootVal)
    // 表示二叉树边界？？？直接preorder.slice(index+1)会直接提取到边界
    root.left = buildTree(preorder.slice(1,index+1),inorder.slice(0,index))
    root.right = buildTree(preorder.slice(index+1),inorder.slice(index+1))
};