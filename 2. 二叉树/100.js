// 判断相同的树
var isSameTree = function(p, q) {
    if(p===null && q===null){
        return true
    }
    if(!p || !q) return false
    if(p.val != q.val) return false
    return isSameTree(p.left,q.left)&&isSameTree(p.right,q.right)
};