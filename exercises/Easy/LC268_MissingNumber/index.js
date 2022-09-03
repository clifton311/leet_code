//Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.



var missingNumber = function(nums) {
       
    // Gauss' Formula 
//     let total = (nums.length* (nums.length + 1)) /2;
    
//     let numsTotal = nums.reduce((a,b) => a+b)
    
//     return total - numsTotal;
    
    
     var sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += i + 1 - nums[i];
  }

  return sum;

};