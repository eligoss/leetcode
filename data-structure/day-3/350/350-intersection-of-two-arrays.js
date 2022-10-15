/**
 * Runtime:   ms 66 ms
 * Memory Usage: 43.4 MB
 * Link: https://leetcode.com/problems/intersection-of-two-arrays-ii/submissions/822656715/
 * //-----------------------------------------------------------------------------
 *    1. Define hash map
 *    2. Loop over the first array
 *    3.    Add all items to the map with value 1 if it is new or increment +1 if exist
 *    4. Define result array
 *    5. Loop over second array
 *    6.    If the key exist in the map and the counter bigger then 0
 *    7.        Push the value to the result list
 *    8.        Decrement the counter in the map.
 * //-----------------------------------------------------------------------------
 /**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {

    // 1. Define hash map
    var map = new Map();

    // 2. Loop over the first array 
    for(let i = 0; i < nums1.length; i++) {
        
        // 3. Add all items to the map with value 1 if it is new or increment +1 if exist
        map.set(nums1[i], map.get(nums1[i]) +1 || 1);
    }

    // 4. Define result array
    var result = [];
    
    // 5. Loop over second array 
    for(let i = 0; i < nums2.length; i++) {

        // 6. If the key exist in the map and the counter bigger then 0
        if(map.get(nums2[i]) > 0)
        {
            // 7. Push the value to the result list
            result.push(nums2[i])
            
            // 8. Decrement the counter in the map.
            map.set(nums2[i], map.get(nums2[i]) - 1);
        }
    }

    return result;
};