/**
 * Runtime: 76 ms
 * Memory Usage: 44.1 MB
 * Link: https://leetcode.com/problems/longest-palindrome/submissions/825338916/
 //-----------------------------------------------------------------------------
 1. Defines the hash set.
 2. Define the counter
 3. Loop over the char array
 4.    If hashSet doesn't contains the char, add it to it
 5.    Else hashSet contains the record, remove it and increment counter by 2 as it is second same char
 6. If the length of of string is even and the counter cover the whole string, return counter
 7. Return counter + 1. (1 is additional single char that we can put in the middle)
 //-----------------------------------------------------------------------------
 /*
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {

    // 1. Defines the hash set.
    let set = new Set();

    // 2. Define the counter
    let counter = 0;

    // 3. Loop over the char array
    for(let c of s){

        // 4. If hashSet doesn't contains the char, add it to it
        if(!set.has(c)) {
            set.add(c);
        }
        // 5. Else hashSet contains the record, remove it and increment counter by 2 as it is second same char
        else {
            counter += 2;
            set.delete(c);
        }
    }

    // 6. If the length of of string is even and the counter cover the whole string, return counter
    if(s.length % 2 == 0 && s.length <= counter  ){
        return counter;
    }

    // 7. Return counter + 1. (1 is additional single char that we can put in the middle)
    return counter + 1
};
