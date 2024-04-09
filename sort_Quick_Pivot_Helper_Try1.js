function pivotHelper1(arr,startIndex=0,endIndex=arr.length - 1){
    let pivotIndex = startIndex;
    let pivotVal = arr[startIndex];

    function swap(array,ind1,ind2){
        // let temp = array[ind1];
        // array[ind1] = array[ind2];
        // array[ind2] = temp; 
        [array[ind1],array[ind2]] = [array[ind2],array[ind1]]
    }

    for(let i = startIndex + 1;i <= arr.length-1; i++){
        if(pivotVal > arr[i]){
           ++pivotIndex; 
            swap(arr,pivotIndex,i);
        }
    }

    swap(arr,pivotIndex,startIndex);
    console.log(arr,pivotIndex);
    return pivotIndex;
}

function quickSort(arr,startIndex=0,endIndex=arr.length - 1){
    if(startIndex < endIndex){
        let index = pivotHelper1(arr,startIndex,endIndex);
    quickSort(arr,startIndex,index-1);
    quickSort(arr,startIndex+1,endIndex);
    } 
    return arr;
    
}

quickSort([11,10,4,5,2,12,13,6,-1,5,8]);