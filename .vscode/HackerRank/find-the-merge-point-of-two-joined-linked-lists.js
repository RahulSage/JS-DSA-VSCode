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
    Find merge point of two linked lists
    Note that the head may be 'null' for the empty list.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function findMergeNode(headA, headB) {
    while(headA){
        let tempB = headB;
        while(tempB){
            if(headA == tempB) 
                return tempB.data;
            tempB = tempB.next;
        }
        headA = headA.next;
    }
    return null;
}

let newList = new SinglyLinkedList();

newList.push(80);
newList.push(81);
newList.push(82);

let newLis2 = new SinglyLinkedList();

newLis2.push(80);
newLis2.push(81);
//newLis2.push(82);

newLis2.head.next.next = newList.head.next;

let nodeMerged = findMergeNode(newList.head,newLis2.head);
//Expected Output = 82