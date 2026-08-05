class Solution {
    /**
     * @param {number[]} nums
     * @param {number} p
     * @return {number}
     */
    minimizeMax(nums, p) {
        nums.sort((a, b) => a - b)
        let maxdiff = Math.abs(nums[0] - nums[nums.length - 1])
        let left = 0, right = maxdiff;
        while (left < right) {
            let mid = Math.floor((left + right) / 2)
            if (this.canMakePairs(mid, p, nums)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }

    canMakePairs(diff, p, nums) {
        let count = 0, i = 1;
        while (i < nums.length) {
            if (Math.abs(nums[i - 1] - nums[i]) <= diff) {
                count++;
                i += 2;
            } else i++;
            if (count >= p) return true;
        }
        return false;
    }
}
