/**
 * Runtime: 74  ms
 * Memory Usage: 44 MB
 * Link: https://leetcode.com/submissions/detail/757867241/
 //-----------------------------------------------------------------------------
 1. Create a dummy node to handle the empty list and use it to find the head.
 2. Create the tail that will be used for iterations.
 3. While the list1 and list2 are defined
 4.     if the list1.val is smaller add it to the tail.
 5          Set the next item of the tail to the smallest.
 6.         Remove processed list items
 7.     Else Set the next item of the tail to the smallest.
 8.     Move to the next item
 9. if the list1 has not been finised add the the rest of it to the tail
 10. if the list2 has not been finised add the the rest of it to the tail
 11. Return the first real node.
 //-----------------------------------------------------------------------------
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {

    // 1. Create a dummy node to handle the empty list and use it to find the head.
    let dummy = new ListNode();

    // 2. Create the tail that will be used for iterations.
    let tail = dummy;

    // 3. While the list1 and list2 are defined
    while(list1!= undefined && list2 != undefined) {

        // 4. if the list1.val is smaller add it to the tail.
        if(list1.val < list2.val) {

            //5. Set the next item of the tail to the smallest.
            tail.next = list1;

            // 6. Remove processed list items
            list1 = list1.next;
        }
        
        else {

            // 7. Else Set the next item of the tail to the smallest.
            tail.next = list2;
            list2 = list2.next;
        }

        //8. move to the next item
        tail = tail.next;
    }

    // 9. if the list1 has not been finised add the the rest of it to the tail
    if(list1 != null) {
        tail.next = list1;
    }

    // 10. if the list2 has not been finised add the the rest of it to the tail
    if(list2 != null) {
        tail.next = list2;
    }

    // 11. Return the first real node.
    return dummy.next;

};