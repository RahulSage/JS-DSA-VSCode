function areThereDuplicates(...args) {
  // good luck. (supply any arguments you deem necessary.)
    args = args.sort();

    let first = 0;

    for(let i = 1 ; i < args.length ; i++){
         console.log(args[i] , args[first]);

         if(args[i] === args[first]){
           return true;  
         }
         first++;   
    }
    return false;
}

