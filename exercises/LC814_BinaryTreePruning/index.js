// Given the root of a binary tree, return the same tree where every subtree (of the given tree) not containing a 1 has been removed.

// A subtree of a node node is node plus every node that is a descendant of node.

var pruneTree = function(root) {
    if(!root) return false;
    if(root.left) root.left = pruneTree(root.left);
    if(root.right) root.right = pruneTree(root.right);

    return ( root.val || root.left || root.right ) ? root : null
};