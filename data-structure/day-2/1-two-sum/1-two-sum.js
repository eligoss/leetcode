/**
 * Runtime: 77  ms
 * Memory Usage: 43.3 MB
 * Link: https://leetcode.com/problems/two-sum/submissions/829586884
 * //-----------------------------------------------------------------------------
 *    1. Set the hash map
 *    2. Loop over the nums
 *    3. Get the target minus the current
 *    4.    If such record is found in hashmap return the current index and the found one
 *    5.    Add the current element to the map.
 * //-----------------------------------------------------------------------------
 /*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    // 1. Define the hash map
    var hashMap = new Map();

    // 2. Loop over the nums
    for(let i = 0; i <nums.length; i++){

        // 3. Get the target minus the current
        let val = target - nums[i];

        // 4. If such record is found in hashmap return the current index and the found one
        if(hashMap.has(val)){
            return [i, hashMap.get(val)];
        }

        // 5. Add the current element to the map.
        hashMap.set(nums[i], i);
    }
};