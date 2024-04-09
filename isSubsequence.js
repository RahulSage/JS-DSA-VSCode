function isSubsequence(str1,str2) {
  // good luck. Add any arguments you deem necessary.
  let index = 0;  
  for(let char of str2){
      console.log(char , str1[index] , index);
      if(index < str1.length && char === str1[index]){
       index++;   
      }
  }

  console.log(str1.length , index);
  if(index ==str1.length){
    return true;  
  } else {
      return false;
  } 
}

isSubsequence('abc', 'acb'); // false (order matters)