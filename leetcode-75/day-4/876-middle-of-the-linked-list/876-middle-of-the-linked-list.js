/**
 * Runtime: 59 ms
 * Memory Usage: 41.5 MB
 * Link: https://leetcode.com/problems/middle-of-the-linked-list/submissions/823568464/
 //-----------------------------------------------------------------------------
 1. Define slow and fast pointer
 2. While fast pointer is not null and next is not null
 3.     Set the slow to the next.
 4.     Set the fast to the next.
 5. Return slow pointer.
 //-----------------------------------------------------------------------------
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {

    // 1. Define slow and fast pointer
    var slowPointer = head, fastPointer = head;

    // 2. While fast pointer is not null and next is not null
    while(fastPointer != null && fastPointer.next != null)
    {
        // 3. Set the slow to the next.
        slowPointer = slowPointer.next;

        // 4. Set the fast to the next.
        fastPointer = fastPointer.next.next;
    }

    // 5. Return slow pointer.
    return slowPointer;
};