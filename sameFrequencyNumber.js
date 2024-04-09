function sameFrequency(num1,num2){
  // good luck. Add any arguments you deem necessary.
    let str1 = String(num1);
    let str2 = String(num2);
    let frequencyCounter = {};

    if(str1.length !== str2.length){
        return false;
    }

    for(let digit of str1){
        frequencyCounter[digit] = (frequencyCounter[digit] || 0) + 1;
    }

    for(let digit of str2){
        if(!frequencyCounter[digit] ){
            return false;
        }
        frequencyCounter[digit] = frequencyCounter[digit] - 1;
    }

    return true;
}