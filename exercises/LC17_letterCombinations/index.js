
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. 
//Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]

function letterCombinations(digits) {
  let res = [];

  const digitToChar = {
      2: 'abc',
      3: 'def',
      4: 'ghi',
      5: 'jkl',
      6: 'mno',
      7: 'qprs',
      8: 'tuv',
      9: 'wxyz',
  };

  function backtrack(i, curStr) {
      if (curStr.length === digits.length) {
          res.push(curStr);
          return;
      }

      for (const c of digitToChar[digits[i]]) {
          backtrack(i + 1, curStr + c);
      }
  }

  if (digits) {
      backtrack(0, '');
  }

  return res;
}

module.exports = letterCombinations;
