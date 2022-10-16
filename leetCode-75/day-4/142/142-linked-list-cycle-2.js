/**
 * Runtime: 89 ms
 * Memory Usage: 45.6 MB
 * Link: https://leetcode.com/problems/linked-list-cycle-ii/submissions/823587529/
 *  //-----------------------------------------------------------------------------
 *  1. Define has set
 *  2. Backup head for the iterations.
 *  3. Interate over the list unit it is not ended
 *  4.     If the hash set contains the node, return the node as result
 *  5      Add the node to hash set
 *  6.     Move current to the next element
 *  7.  Return null if the is no loop.
 *  //-----------------------------------------------------------------------------
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {

    // 1. Define has set
    let set = new Set();

    // 2. Backup head for the iterations.
    var current = head;

    // 3. Interate over the list unit it is not ended
    while(current != null) {

        // 4. If the hash set contains the node, return the node as result
        if(set.has(current)){
            return current;
        }

        // 5. Add the node to hash set
        set.add(current);

        // 6. Move current to the next element
        current = current.next;
    }

    // 7. Return null if the is no loop.
    return null;
};