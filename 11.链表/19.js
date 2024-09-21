// 删除链表倒数第n个结点
// 定义链表节点
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var removeNthFromEnd = function (head, n) {
    let fast = head
    let slow = head
    // 防止n > 链表长度情况出现
    // while(n){
    //     n--
    //     fast = fast.next
    // }
    for(let i = 0;i < n;i++){
        fast = fast.next
    }
    if (!fast) {
        return head.next
    }
    while (fast.next) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return head
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
let n = 2
console.log(removeNthFromEnd(head, n))