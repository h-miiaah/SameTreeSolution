/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
    if(p === null)
        return q === null;

    if(q === null || p.val !== q.val)
    return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};


/*

- If p and q are both null, then return true.
- If one of p and q is null, then return false.
- If the values of p and q are not the same, then return false.
- Recursively check if p’s left child is the same as q’s left child.

*/