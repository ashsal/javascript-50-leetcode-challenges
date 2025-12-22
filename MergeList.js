const l1_node1 = { val: 1, next: null };
const l1_node2 = { val: 2, next: null };
const l1_node3 = { val: 4, next: null };

// Assemble l1: 1 -> 2 -> 4
l1_node1.next = l1_node2;
l1_node2.next = l1_node3;

const l1 = l1_node1;

let node = l1;

while (node) {
  //console.log(node.val);
  node = node.next;
}

const l2_node1 = { val: 1, next: null };
const l2_node2 = { val: 3, next: null };
const l2_node3 = { val: 4, next: null };

// Assemble l2: 1 -> 3 -> 4
l2_node1.next = l2_node2;
l2_node2.next = l2_node3;

const l2 = l2_node1;
var mergeTwoLists = function (list1, list2) {
  console.log(list1);
  console.log(list2);
  let firstNodeInResult = null;
  let lastNodeInResult = null;
  let currentNodeResult1 = list1;
  let currentNodeResult2 = list2;
  while (currentNodeResult1 && currentNodeResult2) {
    let nextNodeInResult = null;
    if (currentNodeResult1.val <= currentNodeResult2.val) {
      nextNodeInResult = currentNodeResult1;
      currentNodeResult1 = currentNodeResult1.next;
    } else {
      nextNodeInResult = currentNodeResult2;
      currentNodeResult2 = currentNodeResult2.next;
    }

    if (firstNodeInResult === null) {
      firstNodeInResult = nextNodeInResult;
      lastNodeInResult = nextNodeInResult;
    } else {
      lastNodeInResult.next = nextNodeInResult;
      lastNodeInResult = lastNodeInResult.next;
    }
  }

  while (currentNodeResult1) {
    if (firstNodeInResult === null) {
      firstNodeInResult = currentNodeResult1;
      lastNodeInResult = currentNodeResult1;
    } else {
      lastNodeInResult.next = currentNodeResult1;
      lastNodeInResult = lastNodeInResult.next;
    }
    currentNodeResult1 = currentNodeResult1.next;
  }

  while (currentNodeResult2) {
    if (firstNodeInResult === null) {
      firstNodeInResult = currentNodeResult2;
      lastNodeInResult = currentNodeResult2;
    } else {
      lastNodeInResult.next = currentNodeResult2;
      lastNodeInResult = lastNodeInResult.next;
    }
    currentNodeResult2 = currentNodeResult2.next;
  }

  return firstNodeInResult;
};

const mergedList = mergeTwoLists(l1, l2);
console.log(mergedList);

let node1 = mergedList;

while (node1) {
  console.log(node1.val);
  node1 = node1.next;
}
