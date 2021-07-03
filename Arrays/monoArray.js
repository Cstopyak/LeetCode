//write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic

//whats being asked?
// take an array and determin if it is true or false
//boolean output
//the algo is asking us to see if the array from left to right are they all non decreasing or non increasing


//array = [-1, -5, -10, -1100, -10101, -1102]
//whats the interpretation for this array
//this array would be true because the numbers are trending downwards

//how can we solve this?
// we will have to loop through this array to get the indexes
// find the direction of the array to see if anything breaks
// can we check to see if each number from the array is are decreasing all the way till the end
//how can we compare each index? by declaring and checking the array[0] to array[1]
//and so on and so fourth

array = [-1, -5, -10, -1100, -10101, -1102]

function monotonic(array) {
    if (array.length <= 2) return true;
    let arrayDirection = array[1] - array[0]; //storing the direction
    for (let i = 2; i < array.length; i++) { //start at index 2
        // console.log(i); we are getting all indexes within the array
        if (arrayDirection == 0) {
            arrayDirection = array[i] - array[i - 1];
            continue;

        }
        if (breakingDirection(arrayDirection, array[i - 1], array[i])) {
            return false;
        }
    }
    return true;
}


function breakingDirection(arrayDirection, prevInt, currInt){ //helper function prevInt is array[i -1]
    const difference = currInt - prevInt; //difference between the current and prevInt
    if (arrayDirection > 0) return difference < 0;
    return difference > 0;
}
console.log(monotonic(array));

console.log(array);

function isMono(array){
    //doing two checks if increasing and if decreasing
    let nonDecrease = true;
    let nonIncrease = true;
    for ( let i = 1; i < array.length; i ++){
        
    }
}



