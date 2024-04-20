class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    swap(arr,index1,index2){
            let temp = arr[index1];
            arr[index1] = arr[index2];
            arr[index2] =  temp;
        }

    insert(value){

        
        this.values.push(value);

        let currentIndex = this.values.length - 1;
        let parentIndex = Math.floor((currentIndex - 1)/2);
        while(currentIndex > 0 && this.values[currentIndex] > this.values[parentIndex]){
            this.swap(this.values,currentIndex,parentIndex);
            currentIndex = parentIndex;
            parentIndex = Math.floor((currentIndex - 1)/2);
        }
        return this.values;
    }

    extractMax(){
        if(this.values.length === 0) return null;
        if(this.values.length === 1) return this.values.pop();
        let removedNode = this.values[0];
        this.values[0] = this.values.pop();

        this.sinkDown();
        
        return removedNode;
    }

    sinkDown(){
        let currentIndex = 0;

        while(currentIndex < this.values.length ){
            let leftIndex = 2 * currentIndex + 1;
            let rightIndex = 2 * currentIndex + 2;

            if(!this.values[leftIndex]) break;
            if(this.values[leftIndex] <= this.values[currentIndex]
               && ( !this.values[rightIndex] || this.values[rightIndex] <= this.values[leftIndex])) break;
            else if(this.values[leftIndex] > this.values[currentIndex] 
                    && (( !this.values[rightIndex] || this.values[leftIndex] >= this.values[rightIndex] )))
            {
                this.swap(this.values,leftIndex,currentIndex);
                currentIndex = leftIndex;
            } else if(this.values[rightIndex] > this.values[currentIndex] 
                      && this.values[leftIndex] <= this.values[rightIndex]) {
                this.swap(this.values,rightIndex,currentIndex);
                currentIndex = rightIndex
            }
        }
    }
}

let maxHeap = new MaxBinaryHeap();
maxHeap.values = [41,39,33,18,27,12];
maxHeap.extractMax();
//maxHeap.insert(50);