class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let need = {};
        let required = 0;
        for (let c of t) {
            if (!(c in need)) required++;
            need[c] = (need[c] || 0) + 1;
        }

        let window = {};
        let formed = 0;
        let left = 0;
        let start = 0;
        let minLen = Infinity;

        for (let right = 0; right < s.length; right++) {
            let ch = s[right];

            if (ch in need) {
                window[ch] = (window[ch] || 0) + 1;
                if (window[ch] === need[ch]) formed++;
            }

            while (formed === required) {
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    start = left;
                }

                let c = s[left];
                if (c in need) {
                    window[c]--;
                    if (window[c] < need[c]) formed--;
                }

                left++;
            }
        }
        return minLen === Infinity ? "" : s.slice(start, start + minLen);
    }
}
