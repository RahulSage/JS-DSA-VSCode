/*
 * Complete the 'waiter' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY number
 *  2. INTEGER q
 */

function waiter(number, q) {
    // Write your code here

    function isPrimeNumber(pNumber){
        if(pNumber === 2) return true;
        for(let i = pNumber - 1; i >= 2 ;i-- ) {
            if(pNumber % i == 0) return false;
        }
        return true;
    }
    let primeArray = [];
    let primeNumber = 2;
    var answers = [];
    while(primeArray.length < q){
       if(isPrimeNumber(primeNumber)) primeArray.push(primeNumber);
       primeNumber++; 
    }

    for(let i of primeArray){
        let arrayA = [];
        let arrayB = [];

        while(number.length){
            let top = number.pop();
            if(top%i === 0) arrayB.push(top);
            else arrayA.push(top);
        }
        while(arrayB.length) answers.push(arrayB.pop());
        //while(arrayA.length) number.push(arrayA.pop());
        number.push(...arrayA);
        
        
    }
    while(number.length) answers.push(number.pop());
    //answers.push(...number);

    return answers;
}

//waiter([3, 3, 4, 4, 9],2)