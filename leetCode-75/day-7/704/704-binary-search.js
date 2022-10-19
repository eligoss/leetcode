/**
 * Runtime: 62 ms
 * Memory Usage: 44.4 MB
 * Link: https://leetcode.com/problems/binary-search/submissions/825726917/
 //-----------------------------------------------------------------------------
 1. Define left and right pointers
 2. Loop while left pointer is less then right.
 3.     Find the med point
 4.     If the median index found target, return the index.
 5.     if the targer value is biggern then media, move left pointer to middle + 1 as index starts from 0
 6.     Else move right index to medium.
 7. Return -1 if not found
 //-----------------------------------------------------------------------------
/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    // 1. Define left and right pointers
    let left = 0, right = nums.length;

    // 2. Loop while left pointer is less then right.
    while(left < right){

        // 3. Find the med point
        let medIndex = Math.floor((left + right) / 2);

        // 4. If the median index found target, return the index.
        if(nums[medIndex] == target){
            return medIndex;
        }

        // 5. if the targer value is biggern then media, move left pointer to middle + 1 as index starts from 0 
        if(nums[medIndex] < target){
            left = medIndex + 1;
        }
        // 6. Else move right index to medium.
        else {
            right = medIndex;
        }
    }

    // 7. Return -1 if not found
    return -1;
};