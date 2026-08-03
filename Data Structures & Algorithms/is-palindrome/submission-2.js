class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0, right = s.length - 1;
        while (left <= right) {
            while (left <= right && !this.isValid(s[left])) left++;
            while (right >= left && !this.isValid(s[right])) right--;
            if (left > right) break;
            if (
                s[left].toLowerCase() !== s[right].toLowerCase()
            ) return false;
            left++;
            right--;
        }
        return true;
    }

    isValid(c) {
        const code = c.charCodeAt(0);
        return (
            (code >= 48 && code <= 57) ||
            (code >= 65 && code <= 90) ||
            (code >= 97 && code <= 122)
        );
    }
}
