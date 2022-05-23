function mergeTwoLists(l1, l2) {

       
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
