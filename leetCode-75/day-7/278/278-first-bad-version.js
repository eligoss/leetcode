/**
 * Runtime: 63 ms
 * Memory Usage: 41.4 MB
 * Link: https://leetcode.com/problems/first-bad-version/submissions/825753265/
 //-----------------------------------------------------------------------------
 1. Set left as first version and right latest version
 2. If left equals to right, return version.
 3. Loop while left is smaller right
 4.     Find mid point.
 5.     Check is version is bed, adjust right pointer to mid.
 6.     Else move the left pointer to the mid.
 7. return the left pointer as the last working version.
 //-----------------------------------------------------------------------------
 /**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {

        // 1. Set left as first version and right latest version
        let left = 1, right = n;

        // 2. If left equals to right, return version.
        if(left == right){
            return n;
        }

        // 3. Loop while left is smaller right
        while(left < right) {

            // 4. Find mid point. 
            let medIndex = Math.floor((left + right) / 2);

            // 5. Check is version is bed, adjust right pointer to mid.
            if(isBadVersion(medIndex)) {
                right = medIndex;
            }
            // 6. Else move the left pointer to the mid.
            else {
                left = medIndex + 1;
            }
        }

        // 7. return the left pointer as the last working version.
        return  left;
    };
};