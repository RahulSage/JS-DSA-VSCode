class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.len = 0;
  }

  push(val) {
    let newVal = new Node(val);

    if (this.head === null) {
      this.head = newVal;
      this.tail = newVal;
    } else {
      this.tail.next = newVal;
      this.tail = newVal;
    }

    ++this.len;
    return this;
  }
}

/*
 * Complete the 'getNode' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER positionFromTail
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function getNode(llist, positionFromTail) {
  // Write your code here
  let currentNode = llist;
  let len = 0;
  let nodeValue = null;

  while (currentNode) {
    len++;
    currentNode = currentNode.next;
  }
  currentNode = llist;
  for (let i = 0; i < len - positionFromTail - 1; i++) {
    currentNode = currentNode.next;
  }
  //console.log(currentNode.data);
  return currentNode.data;
}

let newList = new SinglyLinkedList();

newList.push(80);
newList.push(82);
newList.push(84);
newList.push(86);
newList.push(88);

getNode(newList.head, 5);
