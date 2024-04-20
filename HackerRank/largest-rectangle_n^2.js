/*
 * Complete the 'largestRectangle' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY h as parameter.
 */

function largestRectangle(h) {
    // Write your code here
    let maxRectangle = 1;
    for(let i = 0;i < h.length ; i++){
        let currentProd = h[i];
        for(let j = i+1 ;j < h.length;j++){
            if(h[j] < h[i]) break;
            
            currentProd+= h[i];
        }
        for(let k = i-1 ;k >= 0 ;k--){
            if(h[k] < h[i]) break;
            currentProd+= h[i];
        }
        if(currentProd > maxRectangle) maxRectangle = currentProd;
    }
    return maxRectangle;
}


var maxRectangle = largestRectangle([1,2,3,4,5]);
//Expected Output - 9

//([8979, 4570, 6436, 5083, 7780, 3269, 5400, 7579, 2324, 2116])