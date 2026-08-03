class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Array(nums.length).fill(0)
        const hash = {}
        for (let i = 0; i < nums.length; i++) {
            if (!hash[nums[i]]) hash[nums[i]] = 0
            hash[nums[i]]++
        }
        for (let key in hash) {
            if (!count[nums.length - hash[key]]) {
                count[nums.length - hash[key]] = []
            }
            count[nums.length - hash[key]].push(key)
        }
        let c = k, ans = [];
        for (let i = 0; i < count.length; i++) {
            if (c && count[i].length != 0) {
                for (let j = 0; c && j < count[i].length; j++) {
                    ans.push(count[i][j])
                    c--;
                }
            }
        }
        return ans;
    }
}
