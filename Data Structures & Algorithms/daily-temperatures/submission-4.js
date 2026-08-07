class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temp) {
        let ans = new Array(temp.length).fill(0)
        let max = 0;
        for (let i = temp.length - 1; i >= 0; i--) {
            if (temp[i] >= max) {
                max = temp[i]
                continue;
            }

            let d = 1;
            while (temp[i + d] <= temp[i]) {
                d += ans[i + d]
            }
            ans[i] = d;
        }
        return ans;
    }
}
