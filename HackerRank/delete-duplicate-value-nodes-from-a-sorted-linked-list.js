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
 * Complete the 'removeDuplicates' function below.
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

function removeDuplicates(llist) {
    // Write your code here
    let slowPointer = llist;
    let fastPointer = llist.next;

    while(fastPointer){
        if(slowPointer.data === fastPointer.data) {
            fastPointer = fastPointer.next;
        } else {
           slowPointer.next = fastPointer; 
           slowPointer = slowPointer.next; 
           fastPointer = fastPointer.next; 
        }
    }
    slowPointer.next = null;
    return llist;
}


let newList = new SinglyLinkedList();

newList.push(80);
newList.push(81);
newList.push(82);
newList.push(82);
newList.push(86);
newList.push(86);
newList.push(86);
//newList.push(88);

let newPointer = removeDuplicates(newList.head);