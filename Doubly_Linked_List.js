class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class Doubly_Linked_List {
    constructor() {
        this.head = null;
        this.tail = null;
        this.len = 0;
    }

    push(val){
     var newNode = new Node(val);
     this.len++;
     if(!this.head) {
         this.head = newNode;
         this.tail = newNode;
     } else {
         this.tail.next = newNode;
         newNode.prev = this.tail;
         this.tail = newNode;
     }
     return this;   
    }

    pop(){
        if(!this.tail) return null;
        var currentTail = this.tail;
        if(this.len == 1){
            this.head = null;
            this.tail = null;
        } else {
           this.tail = currentTail.prev;
           this.tail.next = null; 
            
        }
        currentTail.prev = null;
        this.len--;
        return currentTail;
    }

    shift(){
        if(!this.head) return null;
        var currentHead = this.head;
        if(this.len == 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = currentHead.next;
            this.head.prev = null;
            currentHead.next = null;
        }
        this.len--;
        return currentHead;
    }

    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.len++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.len) return null;

        let mid = Math.floor(this.len/2);
        if(index <= mid){
            let currentNode = this.head;
            for(let i=0;i<=mid;i++){
                if(index === i) return currentNode;
                currentNode = currentNode.next;
            }
        } else {
            let currentNode = this.tail;
            for(let i=this.len - 1;i > mid;i--){
                if(index === i) return currentNode;
                currentNode = currentNode.prev;
            }
        }
    }

    set(index,value){
        var nodeAtIndex = this.get(index);
        if(nodeAtIndex) {
            nodeAtIndex.val = value;
            return true;
        }
        return false;
    }

    print(){
        let currentHead = this.head;
        let currentTail = this.tail;
        let arr = [];
        let revArr = [];
        for(let i=0;i<this.len;i++){
            arr.push(currentHead.val);
            revArr.push(currentTail.val);
            currentHead = currentHead.next;
            currentTail = currentTail.prev;
        }

        console.log('From Head - ' + arr);
        console.log('From Tail - ' + revArr);

        return this;
    }

    insert(index,value){
        if(index < 0 || index > this.len) return false;
        if(index === 0) this.unshift(value);
        else if(index === this.len) this.push(value);
        else {
            let newNode = new Node(value);
            let prevNode = this.get(index - 1);
            let nextNode = prevNode.next;

            prevNode.next = newNode;
            nextNode.prev = newNode;
            newNode.next = nextNode;
            newNode.prev = prevNode;

            this.len++;
            
        }
        return true;
    }

    remove(index){
      if(index < 0 || index >= this.len) return null;
        if(index === 0) return this.shift();
        if(index === this.len - 1) return this.pop();

        let nodeRemoved = this.get(index);
        
        nodeRemoved.next.prev = nodeRemoved.prev, nodeRemoved.prev.next = nodeRemoved.next;
        nodeRemoved.next = null, nodeRemoved.prev = null;
        this.len--;
        return nodeRemoved;
        
    }

    
}

function reverse(llist) {
    // Write your code here
    if(!llist) return llist;
    let tempNode = llist;
    let head = llist;
    let tail = null;
    
    while(tempNode){
        let next = tempNode.next;
        tempNode.next = tempNode.prev;
        tempNode.prev = next;
        tail = tempNode;
        tempNode = next;
    }
    return tail;
}

var dList = new Doubly_Linked_List();

dList.push("Harry");
dList.push("Ron");
dList.push("Hermione");
dList.push("Hagrid");
dList.push("Snape");
dList.push("Tom Riddle");
dList.print();

console.log("Pop - ");
dList.pop();
dList.print();

console.log("Shift - ");
dList.shift();
dList.print();

console.log("unshift - ");
dList.unshift("Harry");
dList.print();

console.log("Set - ");
dList.set(3,"Rubious Hagrid");
dList.print();

console.log("Insert - ");
dList.insert(3,"Luna Lovegood");
dList.print();

console.log("Remove - ");
dList.remove(5);
dList.print();

console.log("Reverse - ");
let revList = reverse(dList.head);
//dList.print();