function isValidBST(root) {

    const dfs = (lower, upper, node) => {
    
        if (!node) 
            return true
        
        if (node.val <= lower || node.val >= upper) return false
        
        return dfs(node.left, lower, node.val) && dfs(node.right, node.val, upper)
        
    }
    
    return dfs( -Infinity, Infinity, root)

}

module.exports = isValidBST;
