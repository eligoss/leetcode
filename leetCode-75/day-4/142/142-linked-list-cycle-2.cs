/**
 * Runtime: 108 ms
 * Memory Usage: 39.6 MB
 * Link: https://leetcode.com/submissions/detail/762972796/
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode DetectCycle(ListNode head) {

        // 1. If the head is null, return null
        if(head == null)
        {
            return null;
        }

        // 2. Create hash set
        var hashSet = new HashSet<ListNode>();

        // 3. Loop while the current is not null
        for(var current = head; current.next != null; current = current.next)
        {
            // 4. Add the current to the hash set, if it fails, return the current;
            if(!hashSet.Add(current))
            {
                return current;
            }
        }

        // 5. Return null as a negative scenario
        return null;
    }
}
