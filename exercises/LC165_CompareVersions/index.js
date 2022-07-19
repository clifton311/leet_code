/*Given two version numbers, version1 and version2, compare them.

Version numbers consist of one or more revisions joined by a dot '.'. 
Each revision consists of digits and may contain leading zeros. Every revision contains at least one character. 
Revisions are 0-indexed from left to right, with the leftmost revision being revision 0, the next revision being revision 1, and so on. 
For example 2.5.33 and 0.1 are valid version numbers.

To compare version numbers, compare their revisions in left-to-right order. Revisions are compared using their integer value ignoring any leading zeros. 
This means that revisions 1 and 001 are considered equal. If a version number does not specify a revision at an index, then treat the revision as 0. 
For example, version 1.0 is less than version 1.1 because their revision 0s are the same, but their revision 1s are 0 and 1 respectively, and 0 < 1.

Return the following:

If version1 < version2, return -1.
If version1 > version2, return 1.
Otherwise, return 0.
 */

const compareVersion = (version1, version2) => {
  //turn the versions strings into arrays by splitting
  // Split both strings by dot character into two arrays.
  let v1 = version1.split('.')
  let v2 = version2.split('.')

    //set variable 
    let maxLen = Math.max(v1.length, v2.length)
    // Iterate over the longest array and compare chunks one by one. 
    //If one of the arrays is over, virtually add as many zeros as needed to continue the comparison with the longer array.
    for (let i = 0; i < maxLen; i++) {
      let ver1 = parseInt(v1[i]) || 0;
      let ver2 = parseInt(v2[i]) || 0;

      if (ver1 < ver2) return -1
      if (ver1 > ver2) return 1
    }

    return 0



// If two chunks are not equal, return 1 or -1.
// If we're here, the versions are equal. Return 0.

//Time O(n)
}