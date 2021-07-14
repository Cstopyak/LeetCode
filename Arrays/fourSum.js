//write a function that takes in a non-empty array of distinct intergers and interegers rep a target sum. the function should find all quadruplets in the array that sum up to the target sum and return a two dimensional array of all these quadruplets.

//if no four numbers sum up to the target, then the function should return an empty array

// what are the inputs?
//inputs
//array = [7, 6, 4, -1, 1, 2]
//target = 16

//output
// [[7, 6, 4, -1], [7, 6, 1, 2]]


//How do the nouns relate to each other? See what structure emerges.

// what is the core data structure?


//what is the flow of data through the system?

//Can you stub out some core functions. Write out one or more actual functions with real names and empty function bodies.

// we will need atleast something to keep track like a hashtable for the numbers 
//we will need to loop through the array
//we have to keep track of the numbers for the quadruplets
// have to check pairs of sums




array = [7, 6, 4, -1, 1, 2]

targetSum = 16


function fourSum(array, targetSum){
    const pairs = {}; // initialize the hash table for the sum of every pair in the array
    const quads = []; //hold everysingle quadruplet
    for( let i = 1; i < array.length - 1; i ++){//outer forloop
        for( let j = i + 1; j < array.length; j ++){ //after current number
            const currentSum = array[i] + array[j];
            const dif = targetSum - currentSum;
            if(dif in pairs) {
                for (const pair of pairs[dif]) {
                    quads.push(pair.concat([array[i], array[j]]));
                } //generating quads
            }
        }
        for( let k = 0; k < i; k ++){
            const currentSum = array[i] + array[k];
            if( ! (currentSum in pairs)) { //checking current sum is not all pairs
                pairs[currentSum] = [[array[k], array[i]]] 
            } else {
                pairs[currentSum].push([array[k], array[i]])
            }
        }
    }
    return quads;
}
console.log(fourSum(array, targetSum))