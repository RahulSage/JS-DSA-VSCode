function countUniqueValues(arr){
    let first = 0;
    let second = 1;
    let unique = 1;
    while(second < arr.length){
       if(arr[first] === arr[second]){
           second++;
       } else {
          unique++;
          first = second;
          first
       }
    }

    return unique;
}