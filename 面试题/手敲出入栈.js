class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor() {
      this.top = null;
    }
  
    // 入栈
    push(value) {
      const newNode = new Node(value);
      newNode.next = this.top;
      this.top = newNode;
    }
  
    // 出栈
    pop() {
      if (!this.top) {
        return null; // 栈为空
      }
      const value = this.top.value;
      this.top = this.top.next;
      return value;
    }
  }
  
  // 使用示例
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  console.log(stack.pop()); // 输出 3
  console.log(stack.pop()); // 输出 2
  console.log(stack.pop()); // 输出 1
  console.log(stack.pop()); // 输出 null (栈为空)