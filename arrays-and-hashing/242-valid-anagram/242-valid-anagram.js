/**
 * Runtime: 94 ms
 * Memory Usage: 50.6 MB
 * Link: https://leetcode.com/problems/contains-duplicate/submissions/839901572/
 * //-----------------------------------------------------------------------------
 *    1. Verify that the length of strings are the same, if not, return false.
 *    2. Define 2 hash maps
 *    3.    If hash set has item, return true.
 *    4.    Add item to hash set.
 *    5. Return false.
 * //-----------------------------------------------------------------------------
 /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    // 1. Verify that the length of strings are the same, if not, return false.
    if(s.length !== t.length) {
        return false;
    }
    
    // 2. Define 2 hash maps
    let dicS = {}
    let dicT = {}

    // 3. Loop over strings to add each character in each of the to corresponding hash map, and increment counter (value) 
    for(let i = 0; i < s.length; i++) {

        dicS[s[i]] = ( dicS[s[i]] || 1) + 1
        dicT[t[i]] = ( dicT[t[i]] || 1) + 1
    }

    // 4. Loop each key in one of hash map 
    for (const [key, value] of Object.entries(dicS)) {
        
        //5. Verify that another hash map has the same keys and values
        if(dicT[key] !== value)
            return false
    }
    
    // 6. Return true as strings are anagram
    return true
};