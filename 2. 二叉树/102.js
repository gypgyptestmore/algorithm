// 层序遍历，返回二维数组
// 思路：res二维数组保存每层节点组成的单独数组
// 问题：在每一层遍历开始时，应该创建一个新的空数组来保存当前层的节点值，而不是在外部定义一个数组 res1，这会导致同一个数组在每一次循环中不断被填充，从而导致结果不正确。
var levelOrder = function(root) {
    if(!root) return []
    let queue = [root]
    // let res = [[]]
    // let res1 = []
    let res= []
    while(queue.length){
        let levelLength = queue.length
        let levelNodes = []

        for(let i = 0;i<levelLength;i++){
            let node = queue.shift()
            levelNodes.push(node.val)
            // res1.push(node.val)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        // res.push(res1)
        res.push(levelLength)
    }
    return res
};