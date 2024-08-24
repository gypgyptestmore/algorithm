// 随机链表的复制,实现深拷贝
// 题目解读：节点除了自身指针还有一个指针指向随机。
// 解体：复制自身指针、随机指针，再分离原链表和复制链表，
// 第一步永远是兼容判断
var copyRandomList = function (head) {
  if (!head) return null;
  // 复制节点自身指针
  let current = head;
  while (current) {
    let newNode = new Node(current.val,null,null);
    newNode.next = current.next;
    current.next = newNode;
    current = newNode.next;
  }
  // 复制随机指针
  current = head;
  while (current) {
    if (current.random) {
      current.next.random = current.random.next;
    }
    current = current.next.next;
  }

//   分离原链表和复制链表
  let oldHead = head;
  let newHead = head.next;
  let currentOld = oldHead;
  let currentNew = newHead;

  while (currentOld) {
    currentOld.next = currentOld.next.next;
    if (currentNew.next) {
      currentNew.next = currentNew.next.next;
    }
    currentOld = currentOld.next;
    currentNew = currentNew.next;
  }
  return newHead;
};
let head = [
  [7, null],
  [13, 0],
  [11, 4],
  [10, 2],
  [1, 0],
];
console.log(copyRandomList(head));
