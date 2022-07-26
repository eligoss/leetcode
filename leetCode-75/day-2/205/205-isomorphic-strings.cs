/**
 * Runtime: 83 ms
 * Memory Usage: 41.1 MB
 * Link: https://leetcode.com/submissions/detail/750755164/
public class Solution {
    public bool IsIsomorphic(string s, string t) {

        // 1. Create to hash maps
        var dictionaryStoT = new Dictionary<char, char>();
        var dictionaryTtoS = new Dictionary<char, char>();

        // 2. Loop over the strings
        for(int i = 0; i < s.Length; i++)
        {

            // 3.If the characters from S and T are not present in the hashmap, add them
            var result1 = dictionaryStoT.TryGetValue(s[i], out char firstMapping);
            var result2 = dictionaryTtoS.TryGetValue(t[i], out char secondMapping);

            if(result1 == false && result2 == false)
            {
                dictionaryStoT.Add(s[i], t[i]);
                dictionaryTtoS.Add(t[i], s[i]);
            }
            // 4. If any of the value exist, check that the key from the one map is not equals to the value from another.
            else if(firstMapping != t[i] || result1 != result2)
            {
                return false;
            }
        }

        return true;
    }
}
