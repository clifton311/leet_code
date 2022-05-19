const climbStairs = n => {
    if (n <= 3) {
        return n
    }
        let ways = [0,1,2]

        for (let i = 3; i < n; i++) {
            ways.push([i-1] + ways[i-2])
        }
    return ways[n]
};

module.exports = climbStairs;
