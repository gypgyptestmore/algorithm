// 返回升序后的合并数组(合并的是多重数组)
var mergeKLists = function(lists) {
    // 正常数组
    // 拍平
    // let list =[].concat(...lists)
    // // let list = lists.flat()
    // let list1 = list.sort()
    // return list1

    // 链表
    let mergeTwoList = (l1,l2)=>{
        if(!l1) return l2
        if(!l2) return l1
        if(l1.val < l2.val){
            l1.next =  mergeTwoList(l1.next,l2)
            return l1
        }else{
            l2.next = mergeTwoList(l1,l2.next)
            return l2
        }
    }
    if(lists.length===0) return null
    let result = lists.shift()
    while(lists.length>0){
       result = mergeTwoList(result,lists.shift())
    }
    return result
    // console.log(result)
};
let lists = [[1,4,5],[1,3,4],[2,6]]
console.log(mergeKLists(lists))