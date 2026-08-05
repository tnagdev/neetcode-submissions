class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const deque = [];
        let head = 0;
        const ans = [];
        for (let i = 0; i < nums.length; i++) {
            while (head < deque.length && deque[head] <= i - k) {
                head++;
            }
            while (
                head < deque.length &&
                nums[deque[deque.length - 1]] <= nums[i]
            ) {
                deque.pop();
            }
            deque.push(i);
            if (i >= k - 1) {
                ans.push(nums[deque[head]]);
            }
        }
        return ans;
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
