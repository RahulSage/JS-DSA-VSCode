/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY stringList
 *  2. STRING_ARRAY queries
 */

function matchingStrings(stringList, queries) {
    // Write your code here
    let matchesCount = [];

    for(let i of queries){
        let count = 0;
        for(let j of stringList){
            if(i === j) count++;
        }
        matchesCount.push(count);
    }
        
    return matchesCount;

}

matchingStrings(['ab','ab','abc'],['ab','abc','bc']);
//EXpected -> [2,1,0]