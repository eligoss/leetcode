/**
 * Runtime: 85  ms
 * Memory Usage: 39.1 MB
 * Link: https://leetcode.com/submissions/detail/752160141/
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
var reverseList = function(head) {

    // 1. create
    let prevNode = null;

    // 2. set current for the iterations
    let current = head;

    // 3. Loop while current is defined
    while(current != undefined) {

        // 4. save the next items from init order
        var next = current.next;

        // 5. Set the current next to previous node
        current.next = prevNode;

        // 6. Set prevNode as current
        prevNode = current;

        // 7. Set current as next for next iteration
        current = next;
    }

    //return the last node
    return prevNode;
};