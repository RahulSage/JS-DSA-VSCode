function binarySearch(arr,val){
  // add whatever parameters you deem necessary - good luck!

  if(arr.length == 0) return -1;

  let left =0;
  let right = arr.length - 1;

  while(left <= right){
      let mid = Math.ceil((left + right) / 2);

      console.log(left,mid,right,arr[left],arr[mid],arr[right]);

      if(arr[mid] === val) return mid;
      else if (arr[mid] > val) right = mid -1 ;
      else left = mid + 1;
  }  

  return -1;  
}

