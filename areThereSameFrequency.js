function areThereDuplicates(...args) {
  // good luck. (supply any arguments you deem necessary.)

    let counterFrequency = {};
    for(let i = 0 ; i < args.length ; i++){
         console.log(args[i]);
         if(counterFrequency[args[i]]){
            return true; 
         } 
        counterFrequency[args[i]] = 1;
    }

    return false;
}

areThereDuplicates('a', 'b', 'c', 'a')