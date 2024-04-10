// 算二叉树的深度

// 1. 递归,隐式追踪深度
// var maxDepth = function(root) {
//     if(!root){
//         return 0
//     }
//     let maxLeft = maxDepth(root.left)
//     let maxRight = maxDepth(root.right)
//     return Math.max(maxLeft,maxRight)+1
// };

// 2. 迭代，层序遍历
var maxDepth = function(root) {
    if(!root){ return  0}
    let queue = [root]

    let depth =0 
    // 获取当前队列的大小,表示当前层节点数
    while(queue.length){
        let levelSize = queue.length
        for(let i =0;i < levelSize;i++){
            let o = queue.shift()
            o.left && queue.push(o.left)
            o.right && queue.push(o.right)
        }
        depth++
    }
    return depth
}
