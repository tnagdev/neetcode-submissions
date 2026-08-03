class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let ans = new Array(nums.length).fill(1)
        let sum = 1;
        for (let i = 1; i < nums.length; i++) {
            sum *= nums[i - 1]
            ans[i] = sum
        }
        sum = 1;
        for (let i = nums.length - 2; i >= 0; i--) {
            sum *= nums[i + 1]
            ans[i] *= sum
        }
        return ans;
    }
}
