function averagePair(arr,target){
  // add whatever parameters you deem necessary - good luck!

  if(arr.length === 0){
   return false;   
  }  
  let first = 0;
  let second = arr.length - 1;  

  while(first < second){
      let average = (arr[first] + arr[second]) / 2;

      if(average == target){
        return true;      
      } else if(average < target){
        first++;  
      } else if(average > target){
        second--;  
      }
  } 

    return false;
}

averagePair([],4) // false