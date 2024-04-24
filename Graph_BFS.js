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

    dfsRecursive(vertex){

        if(!vertex) return;
        var visited = {};
        var resultList = [];
        var adjacencyList = this.adjacencyList;
        
        function dfsHelper(vert){
            if(!vertex) return;
            resultList.push(vert);
            visited[vert] = true;
            for(let childVertex of adjacencyList[vert]){
                if(!visited[childVertex]) dfsHelper(childVertex);
            }
        }

       dfsHelper(vertex); 
       return resultList; 
    }

    bfs(vertex){

        if(!vertex) return;
        var visited = {};
        var resultList = [];
        var stack = [];
        stack.push(vertex);

        while(stack.length){
            var currentVertex = stack.shift();

            if(!visited[currentVertex]){
                visited[currentVertex] = true;
                resultList.push(currentVertex);

                this.adjacencyList[currentVertex].forEach(neighbor => {
                    if(!visited[neighbor]) stack.push(neighbor);
                });
            }
        }
        
       return resultList; 
    }

}

let grp = new Graph();
// grp.addVertex("Delhi");
// grp.addVertex("Agra");
// grp.addVertex("Mathura");
// grp.addVertex("Rishikesh");
// grp.addVertex("Haridwar");

// grp.addEdge("Delhi","Mathura");
// grp.addEdge("Delhi","Haridwar");
// grp.addEdge("Haridwar","Rishikesh");
// grp.addEdge("Agra","Mathura");

grp.addVertex("A");
grp.addVertex("B");
grp.addVertex("C");
grp.addVertex("D");
grp.addVertex("E");
grp.addVertex("F");

grp.addEdge("A","B");
grp.addEdge("A","C");
grp.addEdge("B","D");
grp.addEdge("C","E");
grp.addEdge("D","E");
grp.addEdge("D","F");
grp.addEdge("E","F");

/*
            A
          /   \
         B     C
         |     |
         D --  E
          \   /
            F
*/