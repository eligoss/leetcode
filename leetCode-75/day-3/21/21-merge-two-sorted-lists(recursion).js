/**
 * Runtime: 74  ms
 * Memory Usage: 44 MB
 * Link: https://leetcode.com/submissions/detail/757867241/
 //-----------------------------------------------------------------------------
 1. If list1 is empty, return list2
 2. If list2 is empty, return list1
 3. If list1 value is bigger then list2
 4.     Set next list1 element as a result of merge of list1 next and list2
 5      Return list.
 6. Else Set next list2 element as a result of merge of list2 next and list1
 7.     Return list 2.
 //-----------------------------------------------------------------------------
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {

    // 1. If list1 is empty, return list2
    if (list1 == undefined) {
        return list2;
    }
    // 2. If list2 is empty, return list1
    else if (list2 == undefined) {
        return list1;
    }
    // 3. If list1 value is bigger then list2
    else if (list1.val < list2.val) {

        // 4. Set next list1 element as a result of merge of list1 next and list2
        list1.next = mergeTwoLists(list1.next, list2);

        // 5. Return list 1.
        return list1;
    } else {

        // 6. Else set next list2 element as a result of merge of list2 next and list1
        list2.next = mergeTwoLists(list1, list2.next);

        // 7. Return list 2.
        return list2;
    }
};