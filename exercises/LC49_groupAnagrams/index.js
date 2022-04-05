function groupAnagrams(strs) {

  /*
  Given an array of strings strs, group the anagrams together. You can return the answer in any order.

  An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
  typically using all the original letters exactly once.
*/
    let anagrams = {}
    
    for (let str of strs) {
        let sorted = str.split('').sort().join('')
        
        if (!anagrams[sorted]) {
            anagrams[sorted] = [str]
        } else {
            anagrams[sorted].push(str)
        }
    }
    
    return Object.values(anagrams)

}

module.exports = groupAnagrams;
