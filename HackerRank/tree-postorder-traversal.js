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

function postOrder(root) {
	let returnString = '';
    
    function postOrderHelper(currentNode){
        currentNode.left && postOrderHelper(currentNode.left);
        currentNode.right && postOrderHelper(currentNode.right);
        returnString+= (currentNode.data + " ");
    }
    postOrderHelper(root);
    console.log(returnString);
}