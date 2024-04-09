function merge(arr1,arr2){
    let i = 0;
    let j = 0;

    // if(!arr1.length && !arr2.length)
    //     return [];
    // if(!arr1.length )
    //     return arr2;
    // if(!arr2.length)
    //     return arr1;

    let mergedArray = [];

    let shortSize = arr1.length <= arr2.length ? arr1.length : arr2.length;

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
