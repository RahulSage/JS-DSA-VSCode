class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val){
        var newNode = new Node(val);
        
        if(!this.root) {this.root = newNode; return this;}
        else {
            
            let currentNode = this.root;
            while(true){
                if(currentNode.value === val) return this;
                if(currentNode.value < val){
                    if(!currentNode.right){
                       currentNode.right = newNode;
                        return this;
                    } 
                    currentNode = currentNode.right;
                } else {
                  if(!currentNode.left){
                       currentNode.left = newNode;
                        return this;
                    } 
                    currentNode = currentNode.left;  
                }
            }
        }
        
    }

    dfsPreOrder(){
       
       var visited = [];
        if(!this.root) visited;
       var currentNode = this.root;

        function preOrderHelper(givenNode){
            visited.push(givenNode.value);
            if(givenNode.left) preOrderHelper(givenNode.left);
            if(givenNode.right) preOrderHelper(givenNode.right);
        }

        preOrderHelper(currentNode);
        return visited;
    }

    
}



var bst = new BinarySearchTree();

bst.insert(10);
bst.insert(8);
bst.insert(18);
bst.insert(6);
bst.insert(26);
bst.insert(9);
bst.insert(16);


//        10
//      8     18
//    6  9  16   26