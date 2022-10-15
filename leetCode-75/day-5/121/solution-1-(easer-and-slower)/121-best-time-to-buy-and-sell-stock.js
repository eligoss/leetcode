/**
 * Runtime: 79 ms
 * Memory Usage: 52.4 MB
 * Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/822667170
 * //-----------------------------------------------------------------------------
 *    1. Set the min pointer as max
 *    2. Set the max pointer as min
 *    3. Loop over all prices
 *    4.    Try to find a new min
 *    5.    Try to find a new max profit.
 *    6. Return max profit.
 * //-----------------------------------------------------------------------------
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

    // 1. Set the min pointer as max
    let min = Number.MAX_VALUE;

    // 2. Set the max pointer as min
    let maxProfit = Number.MIN_VALUE;

    // 3. Loop over all prices
    for (let p of prices) {

        // 4. Try to find a new min
        min = Math.min(min, p);

        // 5. Try to find a new max profit.
        maxProfit = Math.max(maxProfit, p - min);
    }

    // 6. Return max profit.
    return maxProfit;
};

