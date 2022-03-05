function hasCycle(head) {

  let current = head
  let fast = current
  let slow = current

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next

    if (slow === fast) return true
  }

 return false
}

module.exports = hasCycle;
