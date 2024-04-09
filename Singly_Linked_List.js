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

    traverse(){
        let current = this.head;
        while(current){
            
            console.log(current.val);
            current = current.next;
        }
    }

    pop(){
        if(!this.head)
            return null;
        let pre ;
        
        let current = this.head;
        let last = current;
        // while(current.next){
        //    pre = current;
        //    current = current.next; 
        //     last = current;
        // }
        
        for(let i=0;i<this.len;i++){
           if(i === this.len-2) pre = current;
            if(i === this.len-1) last = current;
           current = current.next;
        }

        if(this.len > 1 ) pre.next = null; 
        else this.head = null;
        this.tail = pre;
        --this.len;

        return last;
    } 

    shift(){
        if(!this.head) return undefined;

        let currentHead = this.head;
        this.head = this.head.next;
        if(this.len === 1) this.tail = this.head;

        this.len--;
        return currentHead;
    }

    unshift(val){
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.len++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.len) return null;

        let current = this.head;
        let currentIndex = 0;

        while(current){
            if(currentIndex === index) return current;
            current = current.next;
            currentIndex++;
        }
    }

    set(value,index){
        let currentNode = this.get(index);

        if(!currentNode) return false;
        currentNode.val = value; 
        return true;
    }

    insert(value,index){
        if(index < 0 || index > this.len) return false;

        if(index === this.len){
            this.push(value) ;
            return true;                   
        } else if(index === 0){
            this.unshift(value);
            return true;
        } else {
          let preNode = this.get(index-1);
          let newNode = new Node(value);

          newNode.next = preNode.next;
          preNode.next = newNode;
          this.len++;  

          return true;  
        }
    }

    remove(index){
       if(index < 0 || index >= this.len) return null;

        if(index === this.len-1) return this.pop();
        if(index === 0) return this.shift();
        
        let preNode = this.get(index-1);
        let removeNode = preNode.next;
        preNode.next = removeNode.next;
        this.len--;  

          return removeNode;
    }

    reverse(){
        if(this.len <= 1) return this;

        let currentNode = this.head;
        let next ;
        let prev = null;
        let head = this.head;
        this.head = this.tail;
        this.tail = head;

        for(let i=0; i< this.len ; i++){
            next = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = next;
            
        }
        return this;
    }
}

let newList = new SinglyLinkedList();

newList.push(80);
newList.push(82);
newList.push(84);
newList.push(86);
newList.push(88);

//newList.traverse();
//newList.pop();
//newList.pop();
//newList.pop();
//newList.traverse();