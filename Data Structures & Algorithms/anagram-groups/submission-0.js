class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hash = {}
        for (let str of strs) {
            const s = str.split('').sort((a, b) => a < b ? -1 : 1).join()
            if (!hash[s]) hash[s] = []
            hash[s].push(str)
        }
        return Object.values(hash)
    }
}
