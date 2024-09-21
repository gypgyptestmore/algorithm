// 反转链表
var reverseList = function(head) {
    let prev= null
    let current = head
    while(current){
        let nextTemp = current.next
        current.next = prev
        prev = current
        current = nextTemp
    }
    return prev
};
