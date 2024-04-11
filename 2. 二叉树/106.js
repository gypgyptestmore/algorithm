// 中序遍历和后序遍历构建二叉树
var buildTree = function(inorder, postorder) {
    if(!inorder.length || !postorder) return null
    //标记根节点位置
    let postIndex = postorder.length - 1
    const build = (inStart,inEnd)=>{
        if(inStart > inEnd) return null
        // 后序中找到根节点，创建根节点，中序中找到
        let rootVal = postorder(postIndex)
        let root = new TreeNode(rootVal)
        postIndex--

        let index = inorder.indexOf(rootVal)

        root.left = build(index+1,inEnd)
        root.right = build(inStart,index-1)
        return root
    }

    return build (0,inorder.length-1)
};