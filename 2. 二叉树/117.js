// 填充每一个节点的下一个右侧节点指针
// 思路：层徐遍历输出，每层最后添加 #,，，
// 还需要进行指针相连

var connect = function(root) {
    if(!root) return null
    let queue = [root]
    while(queue.length){
        let levelLength = queue.length //当前层的节点数
        let prevNode = null 
        for(let i = 0;i < levelLength;i++){
            let node = queue.shift()
            if(prevNode) prevNode.next = node
            prevNode = node
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
    }
    return root
};