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
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function deleteNode(llist, position) {
    // Write your code here
    let currentNode = llist;
    let prevNode = null;

    if(position === 0) return currentNode.next;
    
    for(let i=0;i < position;i++){
        prevNode = currentNode;
        currentNode = currentNode.next;
    }
    prevNode.next = currentNode.next;
    return llist;
}

let newList = new SinglyLinkedList();

newList.push(80);
newList.push(82);
newList.push(84);
newList.push(86);
newList.push(88);

deleteNode(newList.head,2);


//newList.traverse();
//newList.pop();
//newList.pop();
//newList.pop();
//newList.traverse();