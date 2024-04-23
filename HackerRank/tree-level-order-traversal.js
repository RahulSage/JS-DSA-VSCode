function levelOrder(rootNode){
    let traversingQueue = [];
    let stringReturn = ''; 
    traversingQueue.push(rootNode);
    while(traversingQueue.length){
        let firstNode = traversingQueue.shift();
        stringReturn+=  firstNode.data + " ";
        if(firstNode.left) traversingQueue.push(firstNode.left);
        if(firstNode.right) traversingQueue.push(firstNode.right);
    }
    
    console.log(stringReturn);
}