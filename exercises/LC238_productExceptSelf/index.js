var productExceptSelf = function(nums) {

    let result = [];
    let left = []
 
    //create left array to hold all product sums left 

    //set left most item to 1
    left[0] = 1

    
    //create right array to hold all product right of index
    let right = []
      //set right most item to 1
      right[nums.length-1] = 1


    //multiply from the left to calculate prefix product
    for (let i = 1; i < nums.length; i++) {
      left = nums[left] * nums[left]
    }

    //traverse from right to left to find suffix prduct
    for (let i = nums.length-1; i >= 0; i++) {
      right = nums[right +1] * nums[right+1]
    }
    
    //combine both arrays
    for (let i = 0; i < nums.length; i++) {
      result = left[i] * right[i]
    }

    return result

    
    /*************O2n solution ************** */
    // const res = [];
    
    // let product = 1;
    
    // for (let i = 0; i < nums.length; i++) {
    //     res[i] = product;
    //     product *= nums[i];
    // }
    // product = 1;
    // for (let j = nums.length - 1; j >= 0; j--) {
    //     res[j] *= product;
    //     product *= nums[j];
    // }
    
    // return res;
    
};

module.exports = productExceptSelf;
