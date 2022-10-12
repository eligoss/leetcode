/**
 * Runtime: 110 ms
 * Memory Usage: 45 MB
 * Link: https://leetcode.com/submissions/detail/762966699/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {

    // 1. If the head is null, return null
    if(head == null) {
        return null;
    }

    // 2. Create hash set
    var set = new Set();

    // 3. Define current iterator
    let current = head;

    // 4. Loop while the current is not null
    while(current != null) {

        // 5. If the hash set contains the element, it is the loop, return current;
        if(set.has(current)){
            return current;
        }

        // 6. Add the current to the set
        set.add(current);

        // 7. Move iterator to the next element
        current = current.next;
    }

    //8. Return null as negative scenario
    return null;
};