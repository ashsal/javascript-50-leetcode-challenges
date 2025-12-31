function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

// l1 = 2 → 4 → 3
const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));

// l2 = 5 → 6 → 4
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

var addTwoNumbers = function (l1, l2) {
  //console.log(l1);
  //console.log(l2);
  let carry = 0;
  let currentL1 = l1;
  let currentL2 = l2;
  let resultStartingNode = null;
  let resultCurrentNode = null;
  while (currentL1 != null || currentL2 != null || carry > 0) {
    let firstNumber = currentL1?.val ?? 0;
    let secondNumber = currentL2?.val ?? 0;
    let sum = firstNumber + secondNumber + carry;

    let currentDigit = sum % 10;
    carry = Math.floor(sum / 10);

    if (resultStartingNode === null) {
      const firstNode = new ListNode(currentDigit, null);
      resultStartingNode = firstNode;
      resultCurrentNode = firstNode;
    } else {
      resultCurrentNode.next = new ListNode(currentDigit, null);
      resultCurrentNode = resultCurrentNode.next;
    }

    if (currentL1 != null) {
      currentL1 = currentL1.next;
    }

    if (currentL2 != null) {
      currentL2 = currentL2.next;
    }
  }

  return resultStartingNode;
};

console.log(addTwoNumbers(l1, l2));
