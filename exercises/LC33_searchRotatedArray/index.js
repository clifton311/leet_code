
/*
Given the array nums after the possible rotation and an integer target,
 return the index of target if it is in nums, or -1 if it is not in nums.
*/


var search = function(nums, target) {
  //binary search
  
  // [4,5,6,7,0,1,2] target = 0
  // mid 7
  //left 4
  //right 2
  
  let left = 0
  let right = nums.length-1;
  
  while (left <= right) {
      let mid = Math.floor((left + right)/2) ;
      
      if (nums[mid] === target) {
          return mid
      }
      // determine which segment is sorted
       if (nums[left] <= nums[mid]) {
          if (nums[left] <= target && target < nums[mid]) {
              right = mid -1
          } else {
              left = mid +1
          }
      } else {
          if (nums[mid] <= target && target <= nums[right]) {
              left = mid + 1
          } else {
              right = mid  - 1
          }
      }
  }
  return -1
};

//time O (log n)

module.exports = search;
