// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 103
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

function twoSum( array, target){
    const numsReached = {}; //hash table will look like this { 2: 0 ,7:, 1}
    const res = []; //returning the array and filling it up
    for(let i = 0; i < array.length; i++){
        const num = array[i]; //current iterated number
        const comp= target - num; // iterating over the number

        if(numsReached[comp] != undefined){
            res.push(i);
            res.push(numsReached[comp]);
        } // undefined is considered because js considers 0 as a number
        numsReached[num] = i;
    
    }
    return res;

}

console.log(twoSum([3,2,4], 6));






//different example

function twoNumberSum(arr, targetSum) {
    for (let x = 0; x < arr.length - 1; x++) {
        const oneNum = arr[x];
        for (let i = x + 1; i < arr.length; i++) {
            const secNum= arr[i];
            if(oneNum + secNum === targetSum){
                return[oneNum, secNum];
            }


        }
    }
    return[];
}
// console.log(twoNumSum([2,7,11,15],9));