function groupAnagrams(strs) {

    let groups = {}
    
    for (let i = 0; i < strs.length; i++) {
        let word = strs[i];
        let key = word.split('').sort().join('')

        if (!groups[word]) {
            groups[word] = []
        }

        groups[key].push(word)
    }

    return Object.values(groups)

}

module.exports = groupAnagrams;
