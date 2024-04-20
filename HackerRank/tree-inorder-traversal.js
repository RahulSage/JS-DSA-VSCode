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

function inOrder(root) {
	let retString = '';
    
    function inOrderHelper(currentNode){
        if(currentNode.left) inOrderHelper(currentNode.left);
        retString+= (currentNode.data + " ");
        if(currentNode.right) inOrderHelper(currentNode.right);
    }
    inOrderHelper(root);
    console.log(retString);
}