var productExceptSelf = function(nums) {

    let result = [];
    //create left array to hold all product sums left 
    let left = new Array(nums.length).fill(0)
    //set left most item to 1
    left[0] = 1
    
    //crreate right array to hold all product right of index
      let right = new Array(nums.length).fill(0)

      //set right most item to 1
      right[nums.length-1] = 1


    //multiply from the left to calculate prefix product
    for (let i = 1; i < nums.length;i++) {
        left[i] = left[i-1] * nums[i-1]
    }

    //traverse from right to left to find suffix prduct
   
    for (let i = nums.length-2; i >= 0; i--) {
       right[i]= right[i+1] * nums[i + 1]
    }
    
    //combine both arrays
    for (let i = 0; i < nums.length; i++) {
        result[i] = left[i] * right[i]
    }

    return result
    
};

module.exports = productExceptSelf;
