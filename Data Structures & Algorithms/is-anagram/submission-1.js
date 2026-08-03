class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false;
        const map = new Map()
        for (let i = 0; i < s.length; i++) {
            map.set(s[i], (map.get(s[i]) || 0) + 1)
        }
        for (let i = 0; i < t.length; i++) {
            if (!map.has(t[i])) return false;
            const val = (map.get(t[i]) || 0) - 1
            if (val == 0) map.delete(t[i]);
            else map.set(t[i], val)
        }
        return true
    }
}
