// 二叉树的层平均值
// 思路：层序遍历，每层计算平均值使用isFixed保存到数组
var averageOfLevels = function(root) {  
    if(!root) return []
    let queue = [root]
    let avers = []
    while(queue.length){
        let levelLength = queue.length
        let sum = 0
        for(let i = 0;i < levelLength;i++){//每层节点的操作1
            let node = queue.shift()
            sum += node.val
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        avers.push(sum / levelLength)
    }
    return avers 
};
