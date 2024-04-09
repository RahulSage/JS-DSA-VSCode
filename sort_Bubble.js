function bubbleSort(arr){
    //i = looping from arr.length to beginning
    //j = looping from beginning to i-1
    // swap if arr[j] > arr[j+1]
    //return arr

    //return if blank array
    if(!arr.length) return arr;

    function swap(array,ind1,ind2){
        let temp = array[ind1];
        array[ind1] = array[ind2];
        array[ind2] = temp;
    }
    for(let i = arr.length - 1 ; i >= 0 ; i--){
        for(let j = 0 ; j < i ; j++)
            {
                if(arr[j] > arr[j+1]) swap(arr,j,j+1);
            }
    }

    return arr;
}

