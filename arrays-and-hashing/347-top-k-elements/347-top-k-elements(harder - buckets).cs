/**
 * Runtime: 165 ms
 * Memory Usage: 50.7 MB
 * Link: https://leetcode.com/problems/top-k-frequent-elements/submissions/848990374/
 * //-----------------------------------------------------------------------------
 *    1. Define counters hash map, where key is number and value is count
 *    2. Define frequencies map with key as counter and array of numbers
 *    3. Fill the frequencies with all possible counters from 1 to nums.length
 *    4. Set hash map of counter with values
 *    5. Set frequencies with actual numbers 
 *    6. Loop over frequencies from the end to take appropriate amount of records.
 * //-----------------------------------------------------------------------------
*/
public class Solution {
    public int[] TopKFrequent(int[] nums, int k) {
        // 1. Define counters hash map, where key is number and value is count
        var counters = new Dictionary<int, int>();
        
        // 2. Define frequencies map with key as counter and array of numbers
        var frequencies = new Dictionary<int, List<int>>();

        // 3. Fill the frequencies with all possible counters from 1 to nums.length
        int counter = 1;
        foreach (var item in nums)
        {
            counters.TryGetValue(item, out int count);
            counters[item] = count + 1;
            
            // 4. Set hash map of counter with values
            frequencies.Add(counter, new List<int>());
            counter++;
        }
        
        // 5. Set frequencies with actual numbers 
        var maxCounter = 0;
        foreach (var item in counters)
        {
            frequencies[item.Value].Add(item.Key);
            maxCounter = Math.Max(maxCounter, item.Value);
        }

        // 6. Loop over frequencies from the end to take appropriate amount of records.
        var result = new int[k];
        var foundResults = 0;
        for (var i = maxCounter; i > 0 && foundResults < k; i--)
        {
            foreach (var record in frequencies.GetValueOrDefault(i)!)
            {
                result[foundResults++] = record;
                
                if (foundResults == k)
                {
                    break;
                }
            }
        }

        return result;
    }
}