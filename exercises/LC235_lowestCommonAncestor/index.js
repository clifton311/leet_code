function lowestCommonAncestor(root, p, q) 

//     Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
// According to the definition of LCA on Wikipedia: 
// “The lowest common ancestor is defined between 
//two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

/*

Approach 1: Recursive Approach
Intuition

The approach is pretty intuitive. Traverse the tree in a depth first manner. 
The moment you encounter either of the nodes p or q, return some boolean flag. 
The flag helps to determine if we found the required nodes in any of the paths. 
The least common ancestor would then be the node for which both the subtree recursions return a True flag. 
It can also be the node which itself is one of p or q and for which one of the subtree recursions returns a True flag.


Algorithm

Start traversing the tree from the root node.
If the current node itself is one of p or q, we would mark a variable mid as True and continue the search for the other node in the left and right branches.
If either of the left or the right branch returns True, this means one of the two nodes was found below.
If at any point in the traversal, any two of the three flags left, right or mid become True, this means we have found the lowest common ancestor for the nodes p and q.

*/

var lowestCommonAncestor = function(root, p, q) {
    
    let result = null
    //dfs
    const dfs = (current) => {
        //if we reached the end of a branch, return False.
       if (!current) return false
        
        let left = dfs(current.left)
        let right = dfs(current.right)

        // if the current node is one of p or q
        let mid = current === p || current === q
        // if any two of the three flags are left right or mid ,then set result to current
        if (left + right + mid >= 2) {
            result = current
        }
        //return true if either of the three values is true
        return left || right || mid
    }
    
    //call the dfs
    dfs(root)
    //return result
    return result


    // if (!root) return null;
    // let curr = root;
    // while (curr) {
    //   if (p.val < curr.val && q.val < curr.val) curr = curr.left;
    //   else if (p.val > curr.val && q.val > curr.val) curr = curr.right;
    //   else return curr;
    // }
    
    //Time O(N) - N is the number of nodes in the binary tree
    //Space Complexity: O(N). This is because the maximum amount of space utilized by the recursion stack would be NN since the height of a skewed binary tree could be NN.
};
    


module.exports = lowestCommonAncestor;
