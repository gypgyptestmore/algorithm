// 两数相加:
// 数组转为数字，最后逆序输出，格式为数组
// var addTwoNumbers = function (l1, l2) {
//   let numl1 = parseInt(l1.join(""));
//   let numl2 = parseInt(l2.join(""));
//   let sum = numl1+numl2
//   sum = [...String(sum)].reverse()
//   return sum
// };
// 应该在链表上操作，不需要转换为数字
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let curr = dummy;
    let carry = 0;

    while (l1 || l2 || carry) {
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    return dummy.next;
};
let l1 = [2, 4, 3],
  l2 = [5, 6, 4];
console.log(addTwoNumbers(l1, l2));
