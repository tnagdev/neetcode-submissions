class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;
        let count = new Array(26).fill(0)
        for (let c of s1) count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        let left = 0, right = s1.length - 1;
        let c = new Array(26).fill(0)
        for (let i = left; i <= right; i++) {
            c[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
        }
        if (c.every((e, i) => e == count[i])) return true;
        right++;
        while (right < s2.length) {
            c[s2[right].charCodeAt(0) - 'a'.charCodeAt(0)]++
            right++;
            c[s2[left].charCodeAt(0) - 'a'.charCodeAt(0)]--;
            left++;
            if (c.every((e, i) => e == count[i])) return true;
        }
        return false;
    }
}
