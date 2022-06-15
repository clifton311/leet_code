//Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
function levelOrder(root) {

    ///initialize queue with root
        if (!root) return []
        const queue = [root];
        const result = []
        while (queue.length > 0) {
            
    //store the length of the queue
         let len = queue.length
         result.push(queue.map(node => node.val))
        
          while (len--) {
            let node = queue.shift()
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
           }
        }
    
        return result


//     let result = []

//     if (!root) return result
    
//     const queue = [root];

//     while (queue.length) {
        
//         let row = []
//         let rowSize = queue.length;
        
//         while (rowSize > 0) {
//             let current = queue.shift()
//             if (current.left) {
//                 queue.push(current.left)
//             }
//             if (current.right) {
//                 queue.push(current.right)
//             }
            
//          row.push(current.val)
//          rowSize--;
//         }
//        result.push(row)
//     }
    
//   return result

}

 //Time 0(n)
//Space 0(n)

module.exports = levelOrder;
