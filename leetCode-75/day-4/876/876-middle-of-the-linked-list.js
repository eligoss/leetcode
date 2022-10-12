/**
 * Runtime: 59 ms
 * Memory Usage: 42.1 MB
 * Link: https://leetcode.com/submissions/detail/762942716/
 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {

    // 1. Check that the head is not null
    if(head == null) {
        return null;
    }

    // 2. Check that the next is not null
    if(head.next == null) {
        return head;
    }

    // 3. Create slow and fast iterator
    // 4. Slow iterator iterates with x1 speed
    let slow = head;

    // 5. Fast iterator iterates with x2 speed so it starts from the next element
    let fast = head.next;

    // 6. Loop while the fast don't find the end of the list
    while(fast != null) {

        // 7. iterate slow to the next item
        slow = slow.next;

        // 8. If the next of the fast is set, set fast to next x2
        if(fast.next != null) {
            fast = fast.next.next;
        }
        // 9. Else fast is null, exist the loop
        else {
            fast = null;
        }
    }

    //10. Return the result
    return slow;
};