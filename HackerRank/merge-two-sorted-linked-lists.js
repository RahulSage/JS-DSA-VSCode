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

// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(head1, head2) {
    let list3 = new SinglyLinkedList();

    while(head1 || head2){

       if(head1 && head2){
             if(head2.data < head1.data){
                list3.push(head2.data);
               head2 = head2.next; 
             }  else {
                list3.push(head1.data);
               head1 = head1.next; 
             }
       } 
       else if(!head1) {           
           list3.push(head2.data);
           head2 = head2.next;
       } else {
           list3.push(head1.data);
           head1 = head1.next;
       }
    }
    return list3.head;
}

let newList = new SinglyLinkedList();

newList.push(80);
newList.push(82);
newList.push(84);
//newList.push(86);
//newList.push(88);

let newList2 = new SinglyLinkedList();

newList2.push(81);
newList2.push(83);
newList2.push(85);
newList2.push(87);
newList2.push(89);

let newList3 = mergeLists(newList.head,newList2.head);