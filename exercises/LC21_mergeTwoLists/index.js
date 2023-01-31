function mergeTwoLists(l1, l2) {

    // You are given the heads of two sorted linked lists list1 and list2.

    // Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
    
    // Return the head of the merged linked list.

    //create dummy node 

    const result = {val : 0, next : null};

    let cur = result;
    
    while(l1 && l2){

        if(l1.val < l2.val){
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }

        cur = cur.next;
    }

    cur.next = l1 || l2;
    
    return result.next;


}

module.exports = mergeTwoLists;
