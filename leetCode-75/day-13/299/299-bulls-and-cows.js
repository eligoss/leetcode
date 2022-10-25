/**
 * Runtime: 77  ms
 * Memory Usage: 43.9 MB
 * Link: https://leetcode.com/problems/bulls-and-cows/submissions/829733243/
 * //-----------------------------------------------------------------------------
 *    1. Define the hash map for check
 *    2. Loop over the chars in the strings
 *    3. If chars are the same, increment bulls
 *    4. Else
 *    5.    If map contains char from secret that is smaller then 0, increment cow
 *    6.    If map contains char from guess that is bigger then 0, increment cow
 *    7. Set values all values that we are iteration through, all from secret increment, all from guess decrement
 * //-----------------------------------------------------------------------------
 /**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {

    // 1. Define the hash map for check
    let map = new Map();
    let bulls = 0, cows = 0;

    // 2. Loop over the chars in the strings
    for(let i = 0; i < secret.length; i++) {

        // 3. If chars are the same, increment bulls.
        if(secret[i] === guess[i]) {
            bulls++;
        }
        // 4. Else
        else {

            // 5. If map contains char from secret that is smaller then 0, increment cow
            if (map.get(secret[i]) < 0) {
                cows++;
            }
            // 6. If map contains char from guess that is bigger then 0, increment cow
            if (map.get(guess[i]) > 0) {
                cows++;
            }

            // 7. Set values all values that we are iteration through, all from secret increment, all from guess decrement
            map.set(secret[i], (map.get(secret[i]) || 0) + 1)
            map.set(guess[i], (map.get(guess[i]) || 0) - 1)
        }
    }

    // 8. Return Bulls and Cows count
    return `${bulls}A${cows}B`;
};