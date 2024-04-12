// 二叉搜索迭代器
// 开始看不懂题，咩有思路
// 思路：二叉搜索树左边都小于根节点（一定），右边都大于根节点（next中）
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.stack = [];
    this._leftmostInorder(root);
};

/**
 * @param {TreeNode} root
 * @return {void}
 * @private
 */
BSTIterator.prototype._leftmostInorder = function(root) {
    while (root !== null) {
        this.stack.push(root);
        root = root.left;
    }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    const topmostNode = this.stack.pop();
    if (topmostNode.right !== null) {
        this._leftmostInorder(topmostNode.right);
    }
    return topmostNode.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.stack.length > 0;
};
