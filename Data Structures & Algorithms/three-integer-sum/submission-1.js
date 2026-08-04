class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.map((e, i) => [e, i]).sort((a, b) => a[0] - b[0])
        let ans = []
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i - 1][0] == nums[i][0]) continue;
            let left = i + 1, right = nums.length - 1;
            while (left < right) {
                let sum = nums[i][0] + nums[left][0] + nums[right][0]
                if (sum == 0) {
                    ans.push([nums[i][0], nums[left][0], nums[right][0]])
                    while (left < right && nums[left][0] == nums[left + 1][0])
                         left++;
                    while (left < right && nums[right][0] == nums[right - 1][0])
                         right--;
                    left++;
                    right--;
                    continue;
                }
                if (sum < 0) {
                    left++;
                    continue;
                } 
                if (sum > 0) {
                    right--;
                    continue;
                }
            }
        }
        return ans;
    }
}
