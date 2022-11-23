/**
 * Runtime: 92 ms
 * Memory Usage: 48.9 MB
 * Link: https://leetcode.com/problems/reverse-string/submissions/839927125/
 * //-----------------------------------------------------------------------------
 *    1. Define left and right pointers
 *    2. Loop while left pointer is less then right pointer
 *    3.    Put value of right pointer to temp
 *    4.    Set to right pointer value, the left pointer value, decriment right
 *    5.    Set to left pointer value, the right pointer value, increment left
 *    6. Return s
 * //-----------------------------------------------------------------------------
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    
    // 1. Define left and right pointers
    let left = 0, right = s.length - 1;

    // 2. Loop while left pointer is less then right pointer
    while(left < right) {

        // 3. Put value of right pointer to temp
        let temp = s[right];

        // 4. Set to right pointer value, the left pointer value, decriment right
        s[right--] = s[left];

        // 5. Set to left pointer value, the right pointer value, increment left
        s[left++] = temp;
    }

    // 6. Return s
    return s;
};