/*
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function rotateLeft(d, arr) {
    // Write your code here
    for(let i=0;i<d;i++){
        for(let j=0;j<arr.length-1;j++){
            swap(arr,j,j+1);
        }
    }

    return arr;
}

function swap(arr,ind1,ind2){
    let temp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = temp;
}

rotateLeft(2,[1,2,3,4,5]);
//Output = [3,4,5,1,2]