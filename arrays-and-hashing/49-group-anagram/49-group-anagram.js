/**
 * Runtime: 126 ms
 * Memory Usage: 54 MB
 * Link: https://leetcode.com/problems/group-anagrams/submissions/842492160/
 * //-----------------------------------------------------------------------------
 *    1. Define groups hash map.
 *    2. Loop over the strings
 *    3.    Combine and sort sub array as string
 *    4.    Add the anagram to the group.
 *    5. Return the only values of groups
 * //-----------------------------------------------------------------------------
 /**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    // 1. Define groups hash map.
    let groups = {};

    // 2. Loop over the strings
    for(let s of strs) {

        // 3. Combine and sort sub array as string
        let key = s.split('').sort().join('')

        // 4. Add the anagram to the group.
        groups[key] = [...groups[key] || [], s];
    }

    // 5. Return the only values of groups
    return Object.values(groups);
};