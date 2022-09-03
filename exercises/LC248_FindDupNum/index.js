// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.
// O(N)
var findDuplicate = function(nums) {
    nums.sort((a,b) => a -b )
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i+1]) {
            return nums[i]
        }
    }
};


// Optimal - Tortaise and Hare solution
function findDuplicate(nums) {
    let slow = 0;
    let fast = 0;
  
    while (true) {
      slow = nums[slow];
      fast = nums[nums[fast]];
      if (slow == fast) {
        break;
      }
    }
  
    let slow2 = 0;
  
    while (true) {
      slow = nums[slow];
      slow2 = nums[slow2];
      if (slow == slow2) {
        break;
      }
    }
  
    return slow;
  }