class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length == 0) return 0;
        let set = new Map()
        let left = 0, right = 1;
        let ans = 1;
        set.set(s[left], left)
        while (right < s.length) {
            if (set.has(s[right])) {
                left = Math.max(set.get(s[right]) + 1, left)
            }
            set.set(s[right], right)
            ans = Math.max(ans, right - left + 1);
            right++;
        }
        return ans;
    }
}
