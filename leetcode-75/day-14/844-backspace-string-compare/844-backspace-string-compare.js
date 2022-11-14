/**
 * Runtime: 51  ms
 * Memory Usage: 42.6 MB
 * Link: https://leetcode.com/problems/backspace-string-compare/submissions/829745228/
 * //-----------------------------------------------------------------------------
 *    1. Define format function
 *    2.    Define stack
 *    3.    Loop over all characters
 *    4.        If Char is sharp, pop from stack
 *    5.        Else push to stack
 *    6.    Return stack as string
 *    6. Compare formatted strings
 * //-----------------------------------------------------------------------------
 /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {

    // 1. Define format function
    function formatString(item) {

        // 2. Define stack
        let stack = [];

        // 3. Loop over all characters
        for(let c of item) {

            // 4. if Char is sharp, pop from stack
            if(c === "#") {
                stack.pop();
            }
            // 5. Else push to stack
            else {
                stack.push(c)
            }
        }

        // 6. Return stack as string
        return stack.join('')
    }

    // 7. Compare formatted strings.
    return formatString(s) === formatString(t)
};