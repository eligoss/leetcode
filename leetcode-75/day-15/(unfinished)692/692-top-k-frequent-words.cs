/**
 * Runtime: 177 ms
 * Memory Usage: 48.2 MB
 * Link: https://leetcode.com/problems/top-k-frequent-words/submissions/830406914/
 *  //-----------------------------------------------------------------------------
 *     1. Define dictionary
 *     2. Loop over all words add them to the dictionary
 *     3.   Add new words to dic or increment values.
 *     4. Sort dic by value, then by key, take n, select keys.
 * //-----------------------------------------------------------------------------
 **/
public class Solution {
    public IList<string> TopKFrequent(string[] words, int k) {
        
        // 1. Define dictionary
        var dict = new Dictionary<string, int>();

        // 2. Loop over all words add them to the dictionary
        foreach(var word in words) {

            // 3. Add new words to dic or increment values.
            if(dict.TryGetValue(word, out int counter))
            {
                dict[word] = counter + 1;
            }
            else {
                dict.Add(word, 1);
            }
        }

        // 4. Sort dic by value, then by key, take n, select keys.
        return dict.OrderByDescending(x => x.Value).ThenBy(q=>q.Key).Take(k).Select(q => q.Key).ToList();
    }
}