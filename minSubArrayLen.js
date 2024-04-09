function minSubArrayLen(arr,num){

    let retSize = 1;
    while(retSize < arr.length){
        let tempSum = 0;
    for(let i = 0; i < retSize ; i++){
      tempSum+= arr[i];  
    }
console.log(retSize,tempSum);
    for(let i = retSize; i < arr.length ; i++){
     tempSum = tempSum + arr[i] - arr[i - retSize];
        console.log(retSize,tempSum);
     if(tempSum >= num){
         
         return retSize;
     }   
    }
        retSize++;
    }

    return 0;
}

