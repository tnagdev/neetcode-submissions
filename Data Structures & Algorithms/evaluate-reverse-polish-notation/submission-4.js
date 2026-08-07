class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []
        for (let token of tokens) {
            if (isNaN(parseInt(token, 10))) {
                const a = parseInt(stack.pop(), 10)
                const b = parseInt(stack.pop(), 10)
                let val = 0;
                switch(token) {
                    case '+':
                        val = a + b
                        break;
                    case '-':
                        val = b - a
                        break;
                    case '*':
                        val = a * b
                        break;
                    case '/':
                        val = Math.trunc(b / a)
                }
                stack.push(val)
            } else {
                stack.push(token)
            }
        }
        return stack[0]
    }
}
