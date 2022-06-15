const climbStairs = n => {

//    You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

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
