class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
         const n = temperatures.length;
        const result = new Array(n).fill(0);
        let hottest = 0;

        for (let i = n - 1; i >= 0; i--) {
            const currentTemp = temperatures[i];

            if (currentTemp >= hottest) {
                hottest = currentTemp;
                continue;
            }

            let days = 1;
            while (temperatures[i + days] <= currentTemp) {
                days += result[i + days];
            }
            result[i] = days;
        }

        return result;
    }
}
