// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

var moveZeroes = function(nums) {
    //use two pointer method for left and right
    let left = 0
    
    for (let i = 0; i < nums.length; i++) {
        // if the value does not equal zero
        if (nums[i] !== 0) {
            //swap the values
            [nums[i], nums[left]] = [nums[left], nums[i]]
            //increment left pointer, right pointer will move with the for loop
            left++
        }
    }
    return nums
};