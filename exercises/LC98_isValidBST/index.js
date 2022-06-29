
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.


// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

var isValidBST = function(root) {

    //call recurive dfs
    const dfs = (node, lower, upper) => {
        //base case, if there is no node, break
       if (!node) 
           return true
       
       if ((node.val <= lower && lower !== null) || ( upper !== null && node.val >= upper)) 
           return false;
       
        return dfs(node.left, lower, node.val) && dfs(node.right, node.val, upper)
       
   }
   
   return dfs(root, null, null)
};

module.exports = isValidBST;
