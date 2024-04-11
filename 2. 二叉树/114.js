// 二叉树展开为列表
// 层序遍历构建，但是先序遍历展开

// 层序遍历：
// let queue = [root]
// while(queue.length){
//     let levelLength = queue.length
//     for(let i = 0;i < levelLength;i++){
//         let node = queue.shift()
//         if(node.left) queue.push(node.left)
//         if(node.right) queue.push(node.right)
//     }
// }

// 先序遍历
// let preOrder = ()=>{
//     if(!root) return null
//     let res = []
//     let traverse = (node)=>{
//         if(!node) return
//         res.push(node.val)
//         traverse(node.left)
//         traverse(node.right)
//     }
//     traverse(root)
//     return res
// }


var flatten = function(root) {
    // 先序遍历展开
    if(!root) return null
    let res = []
    let traverse = (node)=>{
        if(!node) return null
        res.push(node)
        traverse(node.left)
        traverse(node.right)
    }
    traverse(root)

    for(let i = 0;i < res.length-1;i++){//隔离最后一个节点
        res[i].left = null
        res[i].right = res[i+1]  //当前节点右子节点指向下一个节点
    }

    // 最后一个节点的左右节点滞空
    res[res.length-1].left = null
    res[res.length-1].right = null
};