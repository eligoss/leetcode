/**
 * Runtime: 64  ms
 * Memory Usage: 42.6 MB
 * Link: https://leetcode.com/problems/is-subsequence/submissions/823270282/
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

        // If the s index is finished we have found the full match.
        if(sIndex < 0) {
            return true;
        }
        // If the t index is finished we have not found the full match.
        if(tIndex < 0) {
            return false;
        }

        // If the char math is found try to find next match
        if(s[sIndex] == t[tIndex]) {
            return CheckSubsequence(sIndex -1, tIndex-1);
        }

        return CheckSubsequence(sIndex, tIndex-1);
    }

    // Start from the end of the string
    return CheckSubsequence(s.length -1, t.length -1);
}