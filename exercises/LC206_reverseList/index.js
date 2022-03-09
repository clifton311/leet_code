// 206. Reverse Linked List
// Easy

// 10859

// 184

// Add to List

// Share
// Given the head of a singly linked list, reverse the list, and return the reversed list.

const reverseList = head => {

  let current = head
  let prev = null

  while (head) {
    let temp = current.next

    //reverse 
    current.next = prev
    prev = current 
    current.next = temp


  }

  return prev
 
};

module.exports = reverseList;
