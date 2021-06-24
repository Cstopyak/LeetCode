//write a functiont hat takes ina  non-empty array of intergers and retuens and array of the same length, where each element in the output array is equal tot he product of every other number int he input array.
//if we have an array like [5, 1, 4, 2]
//we would wantit to look like this for the output [8, 40, 10, 20]
//the example here we want to show like so 8 = 1*4*2
//we will need a new array as we cannot modify the current array

//[5, 1, 4, 2]
// 0  2  2  3 indexes
//with every array we always have to iterate through
// since we need a new array we will have to set this up

array = [5, 1, 4, 2]


// function arrayofProds(array){
//     const prods= [];
//     for(let i= 0; i< array.length; i++ ){
//         runningVariable= 1;
//         for( let j = 0; j < array.length; j++){
//             if(i !== j){
//                 runningVariable *= array[j]; //multiplying whatever value is at j
//                 prods[i] = runningVariable;

//             }

//         }
//     }
//     return prods;
// }

// console.log(arrayofProds(array));

function arrayofProds2(array){
    const prods = []; //these lines are initalizing our  output arrays
    const left = [];
    const right = [];

    leftRunningVar = 1;
    for( let i=0; i < array.length; i++){ //we are filling in the array on the left
        left[i] = leftRunningVar;
        leftRunningVar *= array[i];
        // console.log(leftRunningVar)
    }
    rightRunningVar = 1;
    for( let i= array.length-1; i > -1; i--){ //we are filling in with the right
        right[i] = rightRunningVar;
        rightRunningVar *= array[i];
        // console.log(rightRunningVar)
    }
    for(let i = 0; i < array.length; i ++){ //using the values from left and right to create our prod array
        prods[i] = left[i] * right[i]; 
    }
    return prods;
}


console.log(arrayofProds2(array));

//there is another way to do number three will try tomorrow