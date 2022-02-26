// Given an array of integers, return an array of indices of the two numbers
// that add up to the target.
// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.
// --- Examples
// twoSum([2,7,11,15], 9) --> [0,1]
// twoSum([3,5,4], 9) --> [1,2]

function twoSum(arr, target) {
  let map = new Map()
    
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
      
      if (map.has(complement)) {
          return [ i, map.get(complement)]
      } else {
          map.set(arr[i], i)
      }
  }


}

module.exports = twoSum;
