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

const threeSum = nums => {
    nums.sort((a, b) => a - b);
    let res = []; //new array for target value
    for (let i = 0; i < nums.length; i++) {
        const target = 0 - nums[i];
        let left = i + 1;
        let right = nums.length - 1;

        //duplicates
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        while (left < right) {
            if (nums[left] + nums[right] === target) {
                res.push([nums[i], nums[left], nums[right]]);
                left++;
                while (nums[left] === nums[left - 1]) { //keeps incrementing pass duplicates
                    left++;
                }
            } else if (nums[left] + nums[right] < target) { //if they dont meet the target
                left++
            } else {
                right--
            }
        }


    }
    return res;
};

//option 2 not fixed runs infin loop
function threeSum(array, targetSum) {
    array.sort((a, b) => a - b);
    let triples = []; //new array for target value

    for (let i = 0; i < array.length - 2; i++) {
        let left = i + 1;
        let right = array.length - 1;

        while (left < right) {

            const currSum = array[i] + array[left] + array[right];

            if (currSum === targetSum) {
                triples.push([array[i], array[left] + array[right]]);
                left++;
                right--;
            } else if (currSum < targetSum) {
                left++;
            } else if (currSum > targetSum) {
                right--;
            }
        }
    }
    return triples;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4], [-1, -1, 2], [-1, 0, 1]));

