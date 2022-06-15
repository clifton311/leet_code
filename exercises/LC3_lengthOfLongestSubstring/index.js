// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"
var lengthOfLongestSubstring = function(s) {
    
  let start = 0
  let end = 0
  let longest = 0
  
  let set = new Set()

  while (start < s.length) {
      if (!set.has(s[start])) {
          set.add(s[start])
          longest = Math.max(longest, set.size)
          start++
      } else {
          set.delete(s[end])
          end++
      }
  }
  
return longest
  
};


var lengthOfLongestSubstring = function(s) {
  if(s.length <= 1) return s.length;
  
  const seen = new Map();
  let left = 0, longest = 0;
  
  for( let right = 0; right < s.length; right++){
      const curr = s[right];
      const pre = seen.get(curr);
      if(pre >= left){
          left = pre+1;
      }
      seen.set(curr,right);
      longest = Math.max(longest, (right - left + 1));
  }
  return longest;
};



   
// var lengthOfLongestSubstring = function (str) {
//   const hash = {};
//   let start = 0;
//   let max = 0;

//   for (let i = 0; i < str.length; i++) {
//     let rightChar = str[i];

//     if (!(rightChar in hash)) hash[rightChar] = 0;
//     hash[rightChar] += 1;

//     while (hash[rightChar] > 1) {
//       let leftChar = str[start];
//       start += 1;

//       if (leftChar in hash) hash[leftChar] -= 1;
//       if (hash[leftChar] === 0) delete hash[leftChar];
//     }
//     max = Math.max(max, i - start + 1);
//   }
//   return max;
// };

module.exports = lengthOfLongestSubstring;
