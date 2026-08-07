class MinStack {
    constructor() {
        this.stack = []
        this.min = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (!this.min.length || val <= this.min[this.min.length - 1]) 
            this.min.push(val)
        this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        let val = this.stack.pop()
        if (this.min.length && this.min[this.min.length - 1] == val) 
            this.min.pop();
        return val;
    }

    /**
     * @return {number}
     */
    top() {
        if (!this.stack.length) return null;
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        if (this.min.length) return this.min[this.min.length - 1];
        return null
    }
}
