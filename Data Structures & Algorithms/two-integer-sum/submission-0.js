class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hash = {}
        for (let i = 0; i < nums.length; i++) {
            let rem = target - nums[i]
            if (rem in hash) return [hash[rem], i];
            if (!(nums[i] in hash)) hash[nums[i]] = i;
        }
    }
}
