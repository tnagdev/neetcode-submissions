class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hash = {}
        for (let i = 0; i < nums.length; i++) {
            const rem = target - nums[i];
            if (rem in hash) return [hash[rem], i + 1]
            hash[nums[i]] = i + 1;
        }
    }
}
