class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.len = 0;
    }

    enQueue(value){
        var newNode = new Node(value);

        if(!this.first){
           this.first = newNode , this.last = newNode; 
        } else {
           this.last.next = newNode ;
           this.last = newNode;
        }
        this.len++;
        return this.len;
    }

    deQueue(){
        if(!this.first) return null;

        //var currentNode = this.first;
        var deletedNode = this.first;;
        if(this.len === 1) {
            this.first =  null;
            this.last = null;
        } else {
           this.first =  deletedNode.next;
            
        }
        deletedNode.next = null;
        this.len--;
        return deletedNode.value;
    }
}

var myQueue = new Queue();

myQueue.enQueue("FIRST");
myQueue.enQueue("SECOND");
myQueue.enQueue("THIRD");
myQueue.enQueue("FOURTH");