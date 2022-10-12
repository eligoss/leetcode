/**
 * Runtime: 80  ms
 * Memory Usage: 42.6 MB
 * Link: https://leetcode.com/submissions/detail/757846937/
 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    // 1. Set the hash map
    let hashMap = {}

    // 2. Loop over the nums
    for(let i = 0; i < nums.length; i++) {

        // 3. Get the target minus the current
        let result = target - nums[i]

        // 4. If the record is found return the current index and the found one
        if(hashMap[result] != undefined) {
            return [ hashMap[result], i]
        }

        // 5. Add the current element to the map.
        hashMap[nums[i]] = i
    }

    return null
};