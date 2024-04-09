function selectionSort(arr){
    if(!arr.length) return arr;

    function swap(array,ind1,ind2){
        let temp = array[ind1];
        array[ind1] = array[ind2];
        array[ind2] = temp;
    }

    for(let i=0;i<arr.length;i++){
        let min = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j] < arr[min]) min = j;
        }
        if(min !== i) swap(arr,min,i);
    }

    return arr;
}

selectionSort([5,4,2,1,5,4,4,2,1,10,12,5]);