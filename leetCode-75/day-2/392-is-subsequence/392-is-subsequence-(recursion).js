/**
 * Runtime: 64  ms
 * Memory Usage: 42.6 MB
 * Link: https://leetcode.com/problems/is-subsequence/submissions/823270282/
 * Solution Link: https://leetcode.com/problems/is-subsequence/solutions/2707591/javascript-2-solutions-recursion-and-twopointers/
 //-----------------------------------------------------------------------------
 1. Start Recurrsion from the beginning of the both strings.
 2.     If the s index equals to the end of the s string, have found the full match, exit from recursion.
 3.     If the t index equals to the end of the t string, have NOT found match, exit from recursion.
 4.     If sIndex char is found in t string
 5.         Increment sIndex
 6.     Increment tIndex+
 7.     Call recursion of the next elements.
 //-----------------------------------------------------------------------------
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {

    function CheckSubsequence(sIndex, tIndex) {

        // 2. If the s index equals to the end of the s string, have found the full match, exit from recursion.
        if(sIndex == s.length) {
            return true;
        }
        // 3. If the t index equals to the end of the t string, have NOT found match, exit from recursion.
        if(tIndex == t.length) {
            return false;
        }

        // 4. If sIndex char is found in t string
        if(s[sIndex] == t[tIndex]) {

            // 5. Increment sIndex
            sIndex++;
        }

        // 6. Increment tIndex+
        tIndex++;

        // 7. Call recursion of the next elements.
        return CheckSubsequence(sIndex, tIndex);
    }

    // 1. Start Recurrsion from the beginning of the both strings.
    return CheckSubsequence(0, 0);
};