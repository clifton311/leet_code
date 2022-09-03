// Given the root of a binary tree, return the 
// average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.
    
  const averageOfLevels = (root) => {
  
    //bfs
    let queue = [root];
    const average = []
    
    while(queue.length) {
        const next = []
        let sum = 0;
        
        for(let node of queue) {
            sum += node.val;
            if(node.left) next.push(node.left);
            if(node.right) next.push(node.right);
        }
        
        average.push(sum / queue.length)
        queue = next;
    }
    return average

}

// Time complexity : O(n). The whole tree is traversed atmost once. Here, nn refers to the number of nodes in the given binary tree.

// Space complexity : O(m). The size of queuequeue or temptemp can grow upto atmost the maximum number of nodes at any level in the given binary tree. 
// Here, mm refers to the maximum mumber of nodes at any level in the input tree.