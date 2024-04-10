// 反转二叉树
// 想层序遍历，翻转节点
var invertTree = function(root) {
    if(!root) return null
    let queue = [root]

    while(queue.length){
        let levelLength = queue.length
        for(let i = 0;i < levelLength;i++){
            let o = queue.shift()
            // 交换左右子节点
            let temp = o.left
            o.left = o.right
            o.right = temp

            // 左右节点入队列，queue作为修改节点指向的介质，根节点地址没变
            if(o.left) queue.push(o.left)
            if(o.right) queue.push(o.right)
        }
    }
    return root
};