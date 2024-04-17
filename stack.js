class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.len = 0;
    }

    push(value){
        var newNode = new Node(value);

        if(!this.first){
           this.first = newNode , this.last = newNode; 
        } else {
           newNode.next = this.first ;
           this.first = newNode
        }
        this.len++;
        return this.len;
    }

    pop(){
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

var stack = new Stack();

stack.push("first");
stack.push("second");
stack.push("third");
stack.push("fourth");