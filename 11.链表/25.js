// K个一组反转链表

//先进行兼容判断
var reverseKGroup = function (head, k) {
  if (!head || k <= 1) return head;

  const dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;
  let curr = head;

  while (curr) {
    let tail = prev;
    // 查看剩余部分是否大于等于k个节点
    for (let i = 0; i < k; ++i) {
      tail = tail.next;
      if (!tail) return dummy.next;
    }

    let next = tail.next;
    [curr, tail] = reverse(curr, tail); // 翻转curr到tail之间的链表

    // 把子链表重新接回原链表
    prev.next = curr;
    tail.next = next;

    prev = tail;
    curr = tail.next;
  }

  return dummy.next;
};

// 辅助函数，用于翻转区间内的链表
function reverse(start, end) {
  let prev = end.next;
  let curr = start;
  while (prev !== end) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return [end, start];
}

let head = [1, 2, 3, 4, 5],
  k = 2;
console.log(reverseKGroup(head, k));
