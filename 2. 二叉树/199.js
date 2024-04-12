// 二叉树的右视图
// 思路：返回层序遍历将每层最右节点保存到数组，最后返回数组
var rightSideView = function(root) {
    if(!root) return 
    let queue = [root]
    let res = []
    while(queue.length){//每个节点
        let levelLength = queue.length//记录每层的节点数
        let rightVal
        for(let i =0;i < levelLength;i++){
            let node = queue.shift()
            rightVal = node.val     //取每一个都赋值，最后一个退出循环的就是最右边
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        // 记录每层结束的最后一个节点
        res.push(rightVal)
    }
    return res
};