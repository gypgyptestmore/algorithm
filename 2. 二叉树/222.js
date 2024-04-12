// 完全二叉树的节点个数
// 思路：层序遍历计算节点个数，已经确保了是完全二叉树又不需要判断
var countNodes = function(root) {
    if(!root) return 0
    let sum = 0
    let queue = [root]
    while(queue.length){
        let levelLength = queue.length//每层节点个数
        sum += levelLength
        for(let i = 0;i < levelLength;i++){
            let node = queue.shift()
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
    }
    return sum
};
