
// Example 1:

// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.
// Example 2:

// Input: nums = [4,5,6,7,0,1,2]
// Output: 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.


function findMin(nums){
    if(nums.length === 1){
        return nums[0];
    }
    
    let left = 0;
    let right = nums.length - 1;
    
    while(left < right){
        const mid = left + Math.floor((right - left) / 2);
        
        if(nums[mid] > nums[right]){
            left = mid + 1;
        }
        else {
            right = mid;
        }
    }
    
    return nums[left];
};

module.exports = findMin;
