/**
 * Runtime: 104 ms
 * Memory Usage: 51.8 MB
 * Link: https://leetcode.com/submissions/detail/762985538/
 /**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

    // 1. Set left pointer to 0
    let leftPointer = 0;

    // 2. Set right pointer to next item
    let rightPointer = 1;

    // 3. Define the max profit to 0;
    let maxProfit = 0;

    // 4. Loop file right pointer haven't reached the end of the array.
    while (rightPointer < prices.length) {

        // 5. Check that operation is profitable
        if (prices[leftPointer] < prices[rightPointer]) {

            // 6. Calculate profit.
            let profit = prices[rightPointer] - prices[leftPointer];

            // 7. If max profit is smaller then the profit, update max profit
            if (maxProfit < profit) {
                maxProfit = profit;
            }
        }
        // 8. If right pointer is actually smaller then left, set left to the right
        else {
            leftPointer = rightPointer;
        }

        // 9. Iterate the right pointer.
        rightPointer++;
    }

    // 10. Return the max profit.
    return maxProfit;
};