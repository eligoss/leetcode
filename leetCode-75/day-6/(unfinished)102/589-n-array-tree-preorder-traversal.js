/**
 * Runtime: 74 ms
 * Memory Usage: 44.5 MB
 * Link: https://leetcode.com/problems/n-ary-tree-preorder-traversal/submissions/825362792/
 //-----------------------------------------------------------------------------
 //-----------------------------------------------------------------------------
 /*
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {

    // 1. Verify tgat tree is not empty.
    if(root == null) {
        return new Array();
    }

    // 2. Define a queue.
    var queue = new Queue();

    // 3. Enqueue the first element of the tree
    queue.enqueue(root);

    // 4. Define result array.
    var result = new Array();

    // 5. Loop while the queue containts elements.
    while(queue.size() > 0)
    {
        // 6. Define the iterative result array.
        var iterationResult = new Array();

        // 7. Pre save current queue size
        let count = queue.size();

        // 8. Loop over the queue elements that were in the queue at the begining of the iteration
        for(let i = 0; i < count; i++) {

            // 9. Dequeue element from the queue.
            let element = queue.dequeue();

            // 10. Push the element to the iteration result array.
            iterationResult.push(element.val)

            // 11. If the left child exist, add to the end ot the queue.
            if(element.left != null) {
                queue.enqueue(element.left)
            }

            // 12. If the right child exist, add to the end of the queue.
            if(element.right != null) {
                queue.enqueue(element.right)
            }
        }

        // 13. Add the iteration resut to the 
        result.push(iterationResult);
    }

    return result;
};