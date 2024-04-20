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

function CompareLists(llist1, llist2) {
    while(llist1 && llist2){
        if(llist1.data !==  llist2.data) return 0;
        llist1 = llist1.next;
        llist2 = llist2.next;
    }
    if(llist2 || llist1) return 0;
    return 1;

}

let newList = new SinglyLinkedList();

newList.push(80);
newList.push(82);
newList.push(84);
newList.push(86);
newList.push(88);

let newList2 = new SinglyLinkedList();

newList2.push(80);
newList2.push(82);
newList2.push(84);
newList2.push(86);
newList2.push(88);

CompareLists(newList.head,newList2.head);