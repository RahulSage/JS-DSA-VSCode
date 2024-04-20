/*
 * Complete the 'equalStacks' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h1
 *  2. INTEGER_ARRAY h2
 *  3. INTEGER_ARRAY h3
 */

function equalStacks(h1, h2, h3) {
    // Write your code here
    let sum1 = 0,sum2 = 0, sum3 = 0, maxSumStack = 0;
    for(let i of h1){
        sum1+= i;
    }
    for(let i of h2){
        sum2+= i;
    }
    for(let i of h3){
        sum3+= i;
    }
    while(h1.length && h2.length && h3.length){
        if(sum1 === 0 || sum2 === 0 || sum3 === 0 ) return maxSumStack;
        if(sum1 === sum2 && sum1 === sum3) return sum1;
        let maxSum = Math.max(sum1,sum2,sum3);
        if(sum1 >= maxSum) {
            let val = h1.shift(); 
            sum1-= val; }
        if(sum2 >= maxSum) {
            let val = h2.shift(); 
            sum2-= val; }
        if(sum3 >= maxSum) {
            let val = h3.shift(); 
            sum3-= val; }
    }
    return maxSumStack;
}

//var val = equalStacks([1, 1, 1, 1, 2] ,[3, 7],[1, 3, 1]);
var val = equalStacks([3, 2, 1, 1, 1] ,[4, 3, 2],[1, 1, 4, 1]);
// [1, 1, 1, 1, 2] 
// [3, 7]
// [1, 3, 1]

// 3 2 1 1 1   h1 = [3, 2, 1, 1, 1]
// 4 3 2       h2 = [4, 3, 2]
// 1 1 4 1     h3 = [1, 1, 4, 1]

// Ouput - 5

