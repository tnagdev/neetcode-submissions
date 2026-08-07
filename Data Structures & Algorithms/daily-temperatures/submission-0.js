class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temp) {
        let stack = []
        let ans = []
        for (let i = temp.length - 1; i >= 0; i--) {
            while (stack.length && temp[stack[stack.length - 1]] <= temp[i]) 
                stack.pop();
            ans[i] = stack.length ? stack[stack.length - 1] - i : 0;
            stack.push(i);
        }
        return ans;
    }
}
