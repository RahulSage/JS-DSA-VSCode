/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let arr = [];
    let num = 0;

    for(let arrNum of nums){
        if(arrNum !== val){
            arr.push(arrNum);
        }
    }

    return arr;
};