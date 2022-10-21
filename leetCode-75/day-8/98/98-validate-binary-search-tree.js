/**
 * Runtime: 84 ms
 * Memory Usage: 46.4 MB
 * Link: https://leetcode.com/problems/validate-binary-search-tree/submissions/826989910/
 //-----------------------------------------------------------------------------
 1. Call recursion function
 2.     Check if root is null, return valid.
 3.     Check when min is set and the node is smaller return not valid
 4.     Check when max is set and the node is bigger return not valid
 5.     Return result by execute recursion for left and for right side, for left set min, for right
 //-----------------------------------------------------------------------------
 /**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {

    // 1. Call recursion function
    return validateTree(root, null, null);
};

function validateTree(node, min, max) {
    // 2. Check if root is null, return valid.
    if (node == null) {
        return true;
    }

    // 3. Check when min is set and the node is smaller return not valid
    // 4. Check when max is set and the node is bigger return not valid
    if ((min != null && node.val <= min) || (max != null && node.val >= max)) {
        return false;
    }

    // 5. Return result by execute recursion for left and for right side, for left set min, for right
    return validateTree(node.left, min, node.val) && validateTree(node.right, node.val, max)
}