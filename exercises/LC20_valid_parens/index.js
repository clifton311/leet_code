const validParenthesis = s => {
    let stack = []
    let hashMap = {
        "(": ")",
        "{": "}",
        "[": "]"
    }

    for (let i = 0; i < s.length; i++) {
      if (hashMap[s[i]] ) {
          stack.push(s[i])
      } else {
          if (hashMap[stack.pop()] !== s[i]) {
              return false
          }
      }
    }

   return stack.length === 0

};

module.exports = isValid;
