// 实现 MinStack 类:

// MinStack() 初始化堆栈对象。
// void push(int val) 将元素val推入堆栈。
// void pop() 删除堆栈顶部的元素。
// int top() 获取堆栈顶部的元素。
// int getMin() 获取堆栈中的最小元素。

var MinStack = function () {
  this.stack = []; //存储所有元素
  this.minStack = []; //存储当前栈中的最小元素
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  if (this.minStack.length === 0 || val <= this.minStack.length - 1) {
    this.minStack.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop(val);
  if (val <= this.minStack.length - 1) {
    this.minStack.pop(val);
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.stack.length - 1];
};
