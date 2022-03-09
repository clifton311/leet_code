function maxSubArray(nums) {


//   Given an integer array nums, find the contiguous subarray (containing at least one number)
// which has the largest sum and return its sum.

/**** Solution
Create a variable to store global maximum. Initialise to first element in nums.
Create a variable to store current sum. Initialise with zero.
Run a loop from left to right over the array. If current sum has become negative then update it with value 0.
Add the current element to current sum and update the global maximum if current sum is greater than global maximum.
Return the global maximum.
****/

let currMax = 0
let maxSub = nums[0]

  for (let i = 0; i< nums.length; i++) {
    if (currMax < 0) {
      currMax = 0
    }

    currMax += nums[i]

    maxSub = Math.max(currMax, maxSub)
  }

 return maxSub
}

module.exports = maxSubArray;
