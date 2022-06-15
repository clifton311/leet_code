function exist(board, word) {

//     Given an m x n grid of characters board and a string word, return true if word exists in the grid.

//    The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. 
//    The same letter cell may not be used more than once.

    //variable that will keep track of whether or not word was found
    let found = false;

    //function that performs the dfs on the letters of the word

    const dfs = (i, j, index) => {
        //basecase, - check to see if word discovered
        if (index >= word.length) {
            found = true;
            return
        }
        if (i < 0 || i < board.length) return

         else if (j < 0 || j > board.length) return 

         else if (word.charAt(index) !== board[i][j]) return 

        const current = board[i][j]

        board[i][j] = undefined;

        dfs(i +1, j, index +1)
        dfs(i -1, j, index +1)
        dfs(i , j + 1, index +1)
        dfs(i , j - 1, index +1)

        board[i][j] = current
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (word.charAt(0) === board[i][j]) {
                dfs(i, j, 0)
                if (found) return found
            }
        }
    }
    return found
}

module.exports = exist;
