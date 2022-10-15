/**
 * Runtime: 73  ms
 * Memory Usage: 41.7 MB
 * Link: https://leetcode.com/problems/is-subsequence/submissions/823267304/
 * Solution Link: https://leetcode.com/problems/is-subsequence/solutions/2707591/javascript-2-solutions-recursion-and-twopointers/
 //-----------------------------------------------------------------------------
 1. Define s and t pointers
 2. While loop both pointers haven't reached the end of the string
 3.     If the char under s and t pointers are equal
 4.         Increment s pointer to the next char
 5.     Increment t pointer to the next char
 6. Check if s pointer reached the end of the string, it means that the stirng was subsequence.
 //-----------------------------------------------------------------------------
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
    // 1. Define s and t pointers
    let sPointer = 0, tPointer = 0;

    // 2. While loop both pointers haven't reached the end of the string
    while (sPointer < s.length && tPointer < t.length)
    {

        // 3. If the char under s and t pointers are equal 
        if(s[sPointer] == t[tPointer]) {

            // 4. Increment s pointer to the next char
            sPointer++;
        }

        // 5. Increment t pointer to the next char
        tPointer++;
    }

    // 6. Check if s pointer reached the end of the string, it means that the stirng was subsequence.
    return sPointer == s.length;
}