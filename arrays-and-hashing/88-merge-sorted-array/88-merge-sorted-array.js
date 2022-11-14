/**
 * Runtime: 73  ms
 * Memory Usage: 42.2 MB
 * Link: https://leetcode.com/problems/merge-sorted-array/submissions/821432041/
 * //-----------------------------------------------------------------------------
 *    1. While loop m and n bigger then 0
 *    2.    If element from first array bigger then second
 *    3.        Set to the latest index of array the biggest possible element
 *    4.        Decrease the indexer m as the element was used from the list and not available anymore
 *    5     Else use the biggest element from another list.
 *    6.        Set to the latest index of array the biggest possible element
 *    7.        Decrease the indexer m as the element was used from the list and not available anymore
 *    8. Loop over elements from the second array if they left
 *    9. If elements from second array left not used, set them to the corresponding index
 * //-----------------------------------------------------------------------------
 /**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

    // 1. While loop m and n bigger then 0
    while (m > 0 && n > 0) {

        // 2. If elment from first array bigger then second
        if (nums1[m - 1] >= nums2[n - 1]) {

            // 3. Set to the latest index of array the biggest possible element
            nums1[m + n - 1] = nums1[m - 1];

            //4. Decrese the indexer m as the element was used from the list and not avaliable anymore
            m--;

            // 5. Else use the biggest element from another list.     
        } else {

            // 6. Set to the latest index of array the biggest possible element
            nums1[m + n - 1] = nums2[n - 1];

            // 7. Decrese the indexer n as the element was used from the list and not avaliable anymore
            n--;
        }
    }

    // 8. Loop over elements from the second array if they left
    while (n > 0) {

        // 9. If elements from second array left not used, set them to the corresponding index
        nums1[n - 1] = nums2[n - 1];
        n--;
    }
};