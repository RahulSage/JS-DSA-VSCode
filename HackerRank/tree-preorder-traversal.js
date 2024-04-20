/*
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function preOrder(root) {
    let returnString = '';
	function preOrderHerper(currentNode){
        returnString+= (currentNode.data + " ");
        if(currentNode.left) preOrderHerper(currentNode.left);
        if(currentNode.right) preOrderHerper(currentNode.right);
    }
    
    preOrderHerper(root);
    console.log(returnString);
}