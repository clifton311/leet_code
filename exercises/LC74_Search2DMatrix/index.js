// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.


// def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
//     if len(matrix) == 0: return False
//         rows = len(matrix)
//         cols = len(matrix[0])

//     left = 0
//     right = rows * cols -1

//     while left <= right:
//     mid = (left + right) // 2

//     if matrix[mid//cols][mid % cols] == target:
//         return True
//     else:
//         if target <  matrix[mid//cols][mid % cols]:
//             right = mid -1
//         else:
//             left = mid + 1
//     return False

//////////////////////////////////////////////////////////////////////////////
// Single Binary Search
// Time: O(log(mn))  Space: O(1)
//////////////////////////////////////////////////////////////////////////////
var searchMatrix = function(matrix, target) {
    
    //binary search
     let rows = matrix.length
     let cols = matrix[0].length
     
     let left = 0
     let right = rows * cols - 1
     
     while (left <= right) {
         let mid = Math.floor((left+right)/2)
         let row = Math.floor(mid / cols)
         let col = Math.floor(mid % cols)
         
         if (target === matrix[row][col]) {
             return true
         } else if (target < matrix[row][col]) {
             right = mid -1
         } else {
             left = mid +1
         }
     }
         
     return false
 };