/**
 * Runtime: 163 ms
 * Memory Usage: 46 MB
 * Link: https://leetcode.com/problems/top-k-frequent-elements/submissions/848483036/
 * //-----------------------------------------------------------------------------
 *    1. Define counters hash map, where key is number and value is count and element
 *    2. Loop over the nums and init the hash map with elements and counters
 *    3. Sort the array by frequency in descending order
 *    4. Set hash map of counter with values
 *    5. Set frequencies with actual numbers 
 *    6. Return result.
 * //-----------------------------------------------------------------------------
*/
public class Solution {
    public int[] TopKFrequent(int[] nums, int k) {

        // 1. Define counters hash map, where key is number and value is count and element
        var frequentElements = new Dictionary<int, FrequentElement>(nums.Length);

        // 2. Loop over the nums and init the hash map with elements and counters
        foreach (var num in nums)
        {
            if (frequentElements.ContainsKey(num))
            {
                frequentElements[num].Frequency++;
            }
            else
            {
                frequentElements.Add(num, new FrequentElement(num));
            }
        }

        // 3. Convert hashmap to array of values
        var elementCountList = frequentElements.Values.ToList();

        // 4. Sort the array by frequency in descending order
        elementCountList.Sort((a, b) => b.Frequency.CompareTo(a.Frequency));

        // 5. Loop the frequencies array and add items to result list until enought
        var result = new int[k];
        for (var i = 0; i < k; i++)
        {
            result[i] = elementCountList[i].Element;
        }
        
        // 6. Return result.
        return result;
    }
    
    private class FrequentElement
    {
        public readonly int Element;
        public int Frequency;

        public FrequentElement(int el)
        {
            Element = el;
            Frequency = 1;
        }
    }
}