/**
 * Runtime: 231 ms
 * Memory Usage: 49.1 MB
 * Link: https://leetcode.com/problems/top-k-frequent-elements/submissions/848469980/
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
        for (int i = 1; i <= nums.Length; i++)
        {
            frequencies.Add(i, new List<int>());
        }
        
        // 4. Set hash map of counter with values
        foreach (var item in nums)
        {
            counters.TryGetValue(item, out int counter);
            counters[item] = counter + 1;
        }
        
        // 5. Set frequencies with actual numbers 
        foreach (var item in counters)
        {
            frequencies[item.Value].Add(item.Key);
        }

        // 6. Loop over frequencies from the end to take appropriate amount of records.
        var result = new List<int>();
        for (int i = nums.Length; i > 0; i--)
        {
            if (frequencies.TryGetValue(i, out List<int> records))
            {
                foreach (var record in records)
                {
                    result.Add(record);
                    if (result.Count == k)
                    {
                        return result.ToArray();
                    }
                }
            }
        }

        return null;
    }
}