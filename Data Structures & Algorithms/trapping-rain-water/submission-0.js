class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftMax = [], rightMax = [];
        let area = 0, lmax = 0, rmax = 0;
        for (let i = 0; i < height.length; i++) {
            lmax = Math.max(lmax, height[i])
            leftMax[i] = lmax
            rmax = Math.max(
                rmax, 
                height[height.length - 1 - i]
            )
            rightMax[height.length - 1 - i] = rmax
        }

        for (let i = 0; i < height.length; i++) {
            area += Math.max(0, Math.min(leftMax[i], rightMax[i]) - height[i])
        }
        return area
    }
}
