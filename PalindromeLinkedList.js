var isPalindrome = function (head) {
  // 1. find the middle — slow ends at the start of the second half
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // 2. reverse the second half
  let prev = null;
  while (slow !== null) {
    const next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // 3. walk both halves together
  let left = head,
    right = prev;
  while (right !== null) {
    // the reversed half is never the longer one
    if (left.val !== right.val) return false;
    left = left.next;
    right = right.next;
  }
  return true;
};
