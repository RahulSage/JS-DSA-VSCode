function mergeSort(arr){

    if(arr.length <=1) return arr 
     let mid = Math.floor(arr.length/2);
     // let left = mergeSort(arr.slice(0,mid));
     // let right = mergeSort(arr.slice(mid));
     //    return merge(left,right);

    return merge(mergeSort(arr.slice(0,mid)),mergeSort(arr.slice(mid)));

}

    
function merge(arr1,arr2){
    let i = 0;
    let j = 0;
    let mergedArray = [];

    while(i < arr1.length || j < arr2.length){
        if(j >=  arr2.length) {
           mergedArray.push(arr1[i]);
            i++; 
        } else if (i >=  arr1.length){
           mergedArray.push(arr2[j]);
            j++;   
        }
        else if(arr1[i] <= arr2[j]){
            mergedArray.push(arr1[i]);
            i++;
        } else {
          mergedArray.push(arr2[j]);
            j++;  
        }
    }

    return mergedArray;
}

mergeSort([2,4,5,6,1,10,11,12,13]);