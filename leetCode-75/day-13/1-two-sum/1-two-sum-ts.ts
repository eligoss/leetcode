/**
 * Runtime: 80  ms
 * Memory Usage: 42.6 MB
 * Link: https://leetcode.com/submissions/detail/757846937/
 * //-----------------------------------------------------------------------------
 *    1. Set the hash map
 *    2. Loop over the nums
 *    3. Get the target minus the current
 *    4.    If such record is found in hashmap return the current index and the found one
 *    5.    Add the current element to the map.
 *    6. Return null;
 * //-----------------------------------------------------------------------------
 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums: number[], target: number): number[] {

    // 1. Set the hash map
    const map = new Map<number, number>();

    // 2. Loop over the nums
    for(let i = 0; i < nums.length; i++) {

        // 3. Get the target minus the current
        let remain = target - nums[i];

        // 4. If such record is found in hashmap return the current index and the found one
        if(map.has(remain)) {
            return [map.get(nums[i])!, i];
        }

        // 5. Add the current element to the map.
        map.set(nums[i], i);
    }

    return [];
}