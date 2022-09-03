var findDisappearedNumbers = function(nums) {
    
//     const newNums = [];
//     for(let i=1;i<=nums.length;i++){

//     if(!nums.includes(i)){
//         newNums.push(i);
//     }
// }
// return newNums;
        
        
//  const map = new Map();
//   nums.forEach((num, i) => map.set(num, i));

//   const result = [];
//   for (let i = 1; i <= nums.length; i++) {
//     if (!map.has(i)) result.push(i);
//   }
//   return result;
    // O(n) Time
    //O(1) Space
    const output = [];

	for (let i = 0; i < nums.length; i++) {
		const num = Math.abs(nums[i]);
		const idx = num - 1; // get idx of current number. 1-index based: -1

		nums[idx] = Math.abs(nums[idx]) * -1; // |num| to account for negated duplicates, then negate
	}

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) output.push(i + 1); // if positive, missing number. 0-index based: +1
	}

	return output;
};