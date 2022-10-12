/**
 * Runtime: 80  ms
 * Memory Usage: 42.6 MB
 * Link: https://leetcode.com/submissions/detail/757846937/
 /**
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