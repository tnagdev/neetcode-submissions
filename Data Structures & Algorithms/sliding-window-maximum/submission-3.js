class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let left = 0, right = k - 1
        let heap = new MaxHeap()
        for (let i = left; i <= right; i++) {
            heap.push([nums[i], i])
        }
        let max = [heap.peek()[0]]
        right = k;
        while (right < nums.length) {
            left = right - k + 1;
            heap.push([nums[right], right])
            while (heap.peek()[1] < left) heap.pop();
            max.push(heap.peek()[0]);
            left++;
            right++;
        }
        return max;
    }
}

class MaxHeap {
    constructor() {
        this.heap = []
    }

    push(node) {
        this.heap.push(node);
        this.heapifyUp(this.heap.length - 1)
    }

    pop() {
        if (this.heap.length == 1) return this.heap.pop();
        const node = this.heap[0]
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0)
        return node;
    }

    peek() {
        return this.heap[0]
    }

    heapifyUp(ind) {
        while (ind > 0) {
            const parent = Math.floor((ind - 1) / 2);
            if (this.heap[parent][0] < this.heap[ind][0]) {
                [this.heap[parent], this.heap[ind]] = [this.heap[ind], this.heap[parent]]
                ind = parent
            } else break;
        }
    } 

    heapifyDown(ind) {
        let min = ind;
        while (true) {
            min = ind
            const [left, right] = [2 * ind + 1, 2 * ind + 2]
            if (left < this.heap.length && this.heap[left][0] > this.heap[min][0]) min = left;
            if (right < this.heap.length && this.heap[right][0] > this.heap[min][0]) min = right;
            if (ind != min) {
                [this.heap[min], this.heap[ind]] = [this.heap[ind], this.heap[min]]
                ind = min;
            } else break;
        }
    }
}
