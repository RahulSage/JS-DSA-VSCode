function maxSubarraySum(arr, tSize){
  // add whatever parameters you deem necessary - good luck!

    if(tSize > arr.length){
       return null; 
    }
    let maxSum = 0;
    let tempSum = 0;
    for(let i = 0; i < tSize ; i++){
      maxSum+= arr[i];  
    }
    tempSum  = maxSum;

    for(let i = tSize; i < arr.length ; i++){
     tempSum = tempSum + arr[i] - arr[i - tSize];
     if(tempSum > maxSum){
         maxSum = tempSum;
     }   
    }

    return maxSum;
}


