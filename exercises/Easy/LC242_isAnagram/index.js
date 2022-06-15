function isAnagram(s, t) {

    let charMap = {}

    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        charMap[char] = charMap[char] + 1 || 1
    }

    for (let i = 0; i < t.length; i++) {
        let tChar = t[i]
        if (!charMap[tChar]) {
            return false
        } else {
            charMap[tChar]--
        }
    }

    return true
}

module.exports = isAnagram;
