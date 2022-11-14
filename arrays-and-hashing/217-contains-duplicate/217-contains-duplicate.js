/**
 * Runtime: 94 ms
 * Memory Usage: 50.6 MB
 * Link: https://leetcode.com/problems/contains-duplicate/submissions/839901572/
 * //-----------------------------------------------------------------------------
 *    1. Define hash set.
 *    2. Loop over all nums
 *    3.    If hash set has item, return true.
 *    4.    Add item to hash set.
 *    5. Return false.
 * //-----------------------------------------------------------------------------
 * /**
 *  * @param {number[]} nums
 *  * @return {boolean}
 *  */
var containsDuplicate = function(nums) {
    
    // 1. Define hash set.
    let set = new Set();
    
    // 2. Loop over all nums
    for(let i of nums) {
        
        // 3. If hash set has item, return false.
       if(set.has(i)){
           return false;
       }

        // 4. Add item to hash set.
        set.add(i);
   }
    
    // 5. Return false.
    return true;
}