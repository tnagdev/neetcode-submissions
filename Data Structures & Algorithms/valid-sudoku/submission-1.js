class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let i = 0; i < 9; i++) {
            let arr = new Array(9).fill(0)
            for (let j = 0; j < 9; j++) {
                if (board[i][j] == '.') continue;
                if (arr[board[i][j]]) return false;
                arr[board[i][j]] = 1;
            }

            arr = new Array(9).fill(0)
            for (let j = 0; j < 9; j++) {
                if (board[j][i] == '.') continue;
                if (arr[board[j][i]]) return false;
                arr[board[j][i]] = 1;
            }

            arr = new Array(9).fill(0)
            const startI = Math.floor(i / 3) * 3;
            const startJ = (i % 3) * 3;
            for (let k = startI; k < startI + 3; k++) {
                for (let l = startJ; l < startJ + 3; l++) {
                    if (board[k][l] == '.') continue;
                    if (arr[board[k][l]]) return false;
                    arr[board[k][l]] = 1
                }
            }
        }
        return true;
    }
}
