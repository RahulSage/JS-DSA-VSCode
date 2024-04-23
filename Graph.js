class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1,vertex2){
        if(this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push(vertex2);
        if(this.adjacencyList[vertex2]) this.adjacencyList[vertex2].push(vertex1);

    }

    removeEdge(vertex1,vertex2){

        if(this.adjacencyList[vertex1]) 
            this.adjacencyList[vertex1].splice(this.adjacencyList[vertex1].indexOf(vertex2), 1) ;
        if(this.adjacencyList[vertex2]) 
            this.adjacencyList[vertex2].splice(this.adjacencyList[vertex2].indexOf(vertex1), 1) ;
        
    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            this.removeEdge(vertex,this.adjacencyList[vertex][0]);
        }
        delete this.adjacencyList[vertex];
    }

}

let grp = new Graph();
grp.addVertex("Delhi");
grp.addVertex("Agra");
grp.addVertex("Mathura");
grp.addVertex("Rishikesh");
grp.addVertex("Haridwar");

grp.addEdge("Delhi","Mathura");
grp.addEdge("Delhi","Haridwar");
grp.addEdge("Haridwar","Rishikesh");
grp.addEdge("Agra","Mathura");

console.log(grp.adjacencyList);
grp.removeVertex("Agra");
console.log(grp.adjacencyList);