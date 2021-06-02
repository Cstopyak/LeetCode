// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.
// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []

// Constraints:

// 0 <= nums.length <= 3000
// -105 <= nums[i] <= 105

//gameplan
//the first thing we should immediately do is to sort the array from least top greatest
//then go through the array witha  for loop
//two pointers should equal up to our target
//check to see if both pointers add up to target


function threeSum(array, targetSum) {
    array.sort((a, b) => a - b);
    let triples = []; //new array for target value
    
    for (let i = 0; i < array.length - 2; i++) {
        let left = i + 1;
        let right = array.length - 1;
        
        while(left < right){

            const currSum = array[i] + array[left] + array[right];

            if(currSum === targetSum){
                triples.push([array[i], array[left] + array[right]]);
                left ++;
                right --;
            }else if( currSum < targetSum){
                left ++;
            }else if( currSum > targetSum){
                right --;
            }
        }
    }
    return triples;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4], [-1,-1,2],[-1,0,1]));

