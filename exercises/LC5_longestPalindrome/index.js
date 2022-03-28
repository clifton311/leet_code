//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

function longestPalindrome(s) {

    if (s.length === 1) return s;
    let start = 0
    let maxLength = 1
    
    for (let i = 0; i < s.length;i++) {
      let odd = expandAroundMiddle(i -1,i+1)
      let even = expandAroundMiddle(i,i+1)
        
    }

     function expandAroundMiddle  (left, right)  {
      while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
            const currentLength = right-left +1
            if (currentLength > maxLength) {
                maxLength = currentLength
                start = left
            }
          left--
          right++
        }
        
    }
   
    return s.slice(start, start + maxLength)

}

module.exports = longestPalindrome;
