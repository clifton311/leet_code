// Given an array of strings wordsDict and two different strings that already exist in the array word1 and word2,
//  return the shortest distance between these two words in the list.

 

// Example 1:

// Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "coding", word2 = "practice"
// Output: 3

var shortestDistance = function(arr, word1, word2) {
    
  let index1 = -1
  let index2 = -1
  let result = Infinity
  
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] == word1) {
          index1 = i
      } else if (arr[i] == word2) {
          index2 = i
      }
  
      if (index1 !== -1 && index2 !== -1) {
          result = Math.min(result, Math.abs(index2 - index1))
      }
  }
  
  return result
  }

//   var shortestDistance = function(wordsDict, word1, word2) {
//     let min = Infinity;
    
//     // trackers for last known occurance of word1 and word2
//     let w1Occurance = null;
//     let w2Occurance = null;
    
//     const checkDistance = () => {
//         // should only calculate distance after both words have been found
//         if(w1Occurance !== null && w2Occurance !== null) {
//             const diff = Math.abs(w1Occurance - w2Occurance);
//             if(diff < min) min = diff;
//         }
//     }
//     for(let i = 0; i<wordsDict.length; i++) {
//         // update word1 or word2 occurance if target word found
//         if(wordsDict[i] === word1) {
//             w1Occurance = i;
//             checkDistance();
//         }
//          if(wordsDict[i] === word2) {
//             w2Occurance = i;
//             checkDistance();
//         }
//     }
    
//     return min;
  
// };


// Python Solution:

// def shortestDistance(self, words: List[str], word1: str, word2: str) -> int:
// 	shortestDistance = len(words)
// 	position1, position2 = -1, -1
// 	for i in range(len(words)):
// 		if words[i]==word1:
// 			position1 = i
// 		elif words[i]==word2:
// 			position2 = i

// 		if position1!=-1 and position2!=-1:
// 			shortestDistance = min(shortestDistance, abs(position1 - position2))

// 	return shortestDistance