/**
 * Runtime: 107ms
 * Memory Usage: 43 MB
 * Link: https://leetcode.com/submissions/detail/757451470/
 /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

    // 1. Create to hash maps
    let hashSetS = new Map();
    let hashSetT = new Map();

    // 2. Loop over the strings
    for(let i = 0; i < s.length; i++) {

        // 3.If the characters from S and T are not present in the hashmap, add them
        if(!hashSetS.has(s[i]) && !hashSetT.has(t[i])) {
            hashSetS.set(s[i], t[i]);
            hashSetT.set(t[i], s[i]);
        }
        // 4. If any of the value exist, check that the key from the one map is not equals to the value from another.
        else if(hashSetS.get(s[i]) != t[i]) {
            return false;
        }
    }

    return true;
}