function getDigit(num,place){
    let numString = num.toString();

    if(numString.length <= place) return 0;
    return Number(numString[numString.length - (place +1)]);

}

function digitCount(num){
    let numString = num.toString();
    return numString.length;
}

function maxDigitCount(arr){
    let max = 0;
    for(let i = 0;i<arr.length;i++){
        max = Math.max(max,digitCount(arr[i]));
    }

    return max;
}

function radixSort(arr){
    let mostDigitCount = maxDigitCount(arr);

    for(let i=0;i<mostDigitCount;i++){
        let arrBucket = Array.from({length:10} , () => []);

        for(let j=0;j<arr.length;j++){
            let digit = getDigit(arr[j],i);
            arrBucket[digit] = arrBucket[digit] ? arrBucket[digit] : [];
            arrBucket[digit].push(arr[j]);
        }
        let arr1 = [].concat(...arrBucket);
        // for(let k = 0;k<arrBucket.length;k++){
        //     if(arrBucket[k])
        //     arr1 = arr1.concat(arrBucket[k]);
        // }
        arr = arr1;
    }

    return arr;
}

radixSort([5,10,12,8,9,1000,50,100]);