class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length == 0) return 0;
        let set = new Set()
        let left = 0, right = 1;
        let ans = 1;
        set.add(s[left])
        while (right < s.length) {
            if (set.has(s[right])) {
                while (left < right && set.has(s[right])) {
                    set.delete(s[left])
                    left++;
                }
            }
            set.add(s[right])
            ans = Math.max(ans, right - left + 1);
            right++;
        }
        return ans;
    }
}
