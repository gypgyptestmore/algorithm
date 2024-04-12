// 二叉树的锯齿形层序遍历
// 思路：开始的时候以为和102一样，其实多一个条件，奇数层从左往右输出，偶数层从右往左输出

var zigzagLevelOrder = function(root) {
    if(!root) return []
    let queue = [root]
    let res = []
    let level = 0//标记奇偶层
    while(queue.length){
        let levelLength = queue.length
        let levelNode = []
        
        for(let i = 0;i<levelLength;i++){
            let  node = queue.shift()
            if(level%2 === 0 ){
                levelNode.push(node.val)//偶数
            }else{
                levelNode.unshift(node.val)//奇数
            }
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        res.push(levelNode)
        level++
    }
    return res
};