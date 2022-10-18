/**
 * Runtime: 74 ms
 * Memory Usage: 44.5 MB
 * Link: https://leetcode.com/problems/n-ary-tree-preorder-traversal/submissions/825362792/
 //-----------------------------------------------------------------------------
 1. Define result array.
 2. Define sub function to travers tree.
 3.     If node is empty, quit.
 4.     Add to the response the element what was passed.
 5.     Loop over the childrens
 6.         Recursion call of self travers function
 7. Call tree traversal function.
 8. Return the result.
 //-----------------------------------------------------------------------------
 /*
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {

    // 1. Define result array.
    var result = new Array();

    // 2. Define sub function to travers tree.
    function treeTraversal(element) {

        // 3. If node is empty, quit.
        if (element == null) {
            return;
        }

        // 4. Add to the response the element.
        result.push(element.val);

        // 5. Loop over the childrens
        for (let ch of element.children) {
            // 6. Recursion call of self travers function
            treeTraversal(ch)
        }
    }

    // 7. Call tree traversal function.
    treeTraversal(root)

    // 8. Return the resultReturn the result
    return result;
};