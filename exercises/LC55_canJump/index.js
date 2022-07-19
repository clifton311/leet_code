// You are given an integer array nums. You are initially positioned at the array's first index,
// and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

function JumpGame(nums) {
            // start at the end
           let goal = nums.length -1
           //loop backwards through array

           for (let i = nums.length-1; i >= 0; i--) {

               // check if the index + value is greater or equal to goal

               if (i + nums[i] >= goal) {
                   //reposition goal
                   goal = i
               }
           }
           //if goal equals 0, return true
           return goal === 0
       

}



module.exports = canJump;
