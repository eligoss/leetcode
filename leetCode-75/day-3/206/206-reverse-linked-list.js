/**
 * Runtime: 69  ms
 * Memory Usage: 43.9 MB
 * Link: https://leetcode.com/problems/reverse-linked-list/submissions/823554489/
 //-----------------------------------------------------------------------------
 1. Create prev node variable, point to null as first prev node should point to nowhere
 2. Set current variable as head, for the iterations
 3. Loop while current is defined
 4.     Save the next items from init order
 5      Set the current next to the previous node (so the order of relationship will be reversed)
 6.     Set prevNode as current so the next step direction will be possible to revert
 7.     Set current as next for next iteration
 8. Return prevNode
 //-----------------------------------------------------------------------------
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {

    // 1. Create prev node variable, point to null as first prev node should point to nowhere
    let prevNode = null;

    // 2. Set current variable as head, for the iterations
    let current = head;

    // 3. Loop while current is defined
    while(current != undefined) {

        // 4. Save the next items from init order
        var next = current.next;

        // 5. Set the current next to the previous node (so the order of relationship will be reversed)
        current.next = prevNode;

        // 6. Set prevNode as current so the next step direction will be possible to revert
        prevNode = current;

        // 7. Set current as next for next iteration
        current = next;
    }

    // 8. Return prevNode
    return prevNode;
};