class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;
        const cnt1 = new Array(26).fill(0);
        const cnt2 = new Array(26).fill(0);
        for (let i = 0; i < s1.length; i++) {
            cnt1[s1.charCodeAt(i) - 97]++;
            cnt2[s2.charCodeAt(i) - 97]++;
        }

        let matches = 0;
        for (let i = 0; i < 26; i++) {
            if (cnt1[i] === cnt2[i]) matches++;
        }

        let left = 0;
        for (let right = s1.length; right < s2.length; right++) {
            if (matches === 26) return true;
            
            let idx = s2.charCodeAt(right) - 97;
            cnt2[idx]++;
            if (cnt2[idx] === cnt1[idx]) matches++;
            else if (cnt2[idx] === cnt1[idx] + 1) matches--;

            idx = s2.charCodeAt(left) - 97;
            cnt2[idx]--;
            if (cnt2[idx] === cnt1[idx]) matches++;
            else if (cnt2[idx] === cnt1[idx] - 1) matches--;

            left++;
        }

        return matches === 26;
    }
}
