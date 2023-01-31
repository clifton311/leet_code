// You are given two non-empty linked lists representing two non-negative
// integers. The digits are stored in reverse order and each of their nodes
// contain a single digit. Add the two numbers and return it as a linked list.
// --- Example
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

var addTwoNumbers = function(l1, l2) {
  // Create a dummy node dummy with a value of 0, and a pointer curr that initially points to dummy. 
  //The dummy node is used to simplify the logic and make it easier to return the resulting linked list.
  let dummy = new ListNode(0);
  let curr = dummy;
  // Initialize a variable carry to 0. The carry variable is used to store the carry over from one digit to the next when adding the linked lists.
  let carry = 0;

  // Use a while loop to traverse both linked lists, l1 and l2, and add the values of each node. 
  //The loop continues as long as either linked list has more nodes or the carry is greater than 0.

  while (l1 || l2 || carry) {
    // Within the loop, if l1 has more nodes, add the value of the current node to the carry, and move to the next node in l1.
      if (l1) {
          carry += l1.val;
          l1 = l1.next;
      }
      // Within the loop, if l2 has more nodes, add the value of the current node to the carry, and move to the next node in l2.
      if (l2) {
          carry += l2.val;
          l2 = l2.next;
      }
      // Create a new node in the resulting linked list with the value of carry % 10, and set the next property of the current node to the new node.
      curr.next = new ListNode(carry % 10);
      // Update the value of curr to the new node.
      curr = curr.next;
      // Update the value of carry to be Math.floor(carry / 10) to get the carry over for the next iteration.
      carry = Math.floor(carry / 10);
  }
  
  
  // Repeat the loop until both linked lists have been fully traversed and the carry is 0.
  
  // Return the next node of the dummy node, as the dummy node itself is not part of the resulting linked list.
  return dummy.next;
};


// The code uses the ListNode class to define the structure of a node in a singly linked list. Each node has a val property representing the value of the node, and a next property representing a reference to the next node in the list.

// The addTwoNumbers function takes two linked lists, l1 and l2, as input, and returns a new linked list representing the sum of the two input linked lists. The function works as follows:










module.exports = addTwoNumbers;
