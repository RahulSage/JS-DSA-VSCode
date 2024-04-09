function naiveStringSearch(arr,pattern){

    let count = 0;

    for(let i=0;i < arr.length ; i++){
        let matchesCount = 0;
        for(let j=0;j<pattern.length;j++){
            if(pattern[j] !== arr[i+j] ) break;
            ++matchesCount;
        }

        if(matchesCount === pattern.length) ++count;
    }

    return count;
}