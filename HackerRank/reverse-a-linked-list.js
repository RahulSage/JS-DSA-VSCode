class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.len = 0;
    }

    push(val){
        let newVal = new Node(val);

        if(this.head === null){
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
 * Complete the 'reverse' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts INTEGER_SINGLY_LINKED_LIST llist as parameter.
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

function reverse(llist) {
    // Write your code here
    let currentNode = llist;
    let nextNode;
    let prevNode = null;
    while(currentNode.next){
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        
    }
    currentNode.next = prevNode;
    return currentNode;
}

let newList = new SinglyLinkedList();

newList.push(80);
newList.push(82);
newList.push(84);
newList.push(86);
newList.push(88);

let revList =  reverse(newList.head);