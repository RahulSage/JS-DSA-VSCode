class Weighted_Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1,vertex2,weight){
        if(this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push({node: vertex2, weight: weight});
        if(this.adjacencyList[vertex2]) this.adjacencyList[vertex2].push({node: vertex1, weight: weight});

    }

    removeEdge(vertex1,vertex2){

        if(this.adjacencyList[vertex1]) 
            this.adjacencyList[vertex1] =  this.adjacencyList[vertex1].filter(function (edge) {
            return edge.node != vertex2;
        });
        if(this.adjacencyList[vertex2]) 
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(function (edge) {
            return edge.node != vertex1;
        }); ;
        
    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            this.removeEdge(vertex,this.adjacencyList[vertex][0].node);
        }
        delete this.adjacencyList[vertex];
    }

}

let grp = new Weighted_Graph();
grp.addVertex("Delhi");
grp.addVertex("Agra");
grp.addVertex("Mathura");
grp.addVertex("Rishikesh");
grp.addVertex("Haridwar");

grp.addEdge("Delhi","Mathura",150);
grp.addEdge("Delhi","Haridwar",200);
grp.addEdge("Haridwar","Rishikesh",40);
grp.addEdge("Agra","Mathura",100);