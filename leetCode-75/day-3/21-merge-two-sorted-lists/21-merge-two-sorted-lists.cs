/**
 * Runtime: 91 ms
 * Memory Usage: 40.1 MB
 * Link: https://leetcode.com/submissions/detail/744465760/x
 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode MergeTwoLists(ListNode list1, ListNode list2) {

         // 1. Create a dummy node to handle the empty list and use it to find the head.
        ListNode dummy = new ListNode();

        // 2. Create the tail that will be used for iterations.
        var tail = dummy;

         // 3. While the list1 and list2 are defined
        while (list1 != null && list2 != null)
        {
            // 4. if the list1.val is smaller add it to the tail.
            if(list1.val < list2.val)
            {
                //5. Set the next item of the tail to the smallest.
                tail.next = list1;

                // 6. Remove processed list items
                list1 = list1.next;
            }
            else
            {
                //7. Set the next item of the tail to the smallest.
                tail.next = list2;
                list2 = list2.next;
            }

            //8. move to the next item
            tail = tail.next;
        }

        // 9. if the list1 has not been finised add the the rest of it to the tail
        if(list1 != null)
        {
            tail.next = list1;
        }

        // 10. if the list1 has not been finised add the the rest of it to the tail
        else if(list2 != null)
        {
            tail.next = list2;
        }

         // 11. Return the first real node.
        return dummy.next;
    }
}