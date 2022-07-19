// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]

const generateParen = (n) => {
    const res = [];

    const backTrack = (open, close, n) => {
        if (n) {
            res.push(n)
        }

        if (open < n) {
            backTrack(open +1, close, n)
        }
    }
}