/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let first = 0;

    for(let i = 1; i< nums.length; i++){
        if(nums[i] !== nums[first]){
            first++;
            nums[first] = nums[i];
        }
    }
    console.log(first);
    return nums.slice(0,first+1);
};