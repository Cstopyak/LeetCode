// given an array of integers between 1 and n, inclusive, where n is the length of the array.
//write a functiont hat returns the first integer that appears more than once

//ex. the function should return the ones whos first dup value has the min index

// array = [2, 1, 5, 2, 3, 3, 4]

// looks like the 2 shows up before any other dups
// we will need something to keep track of what we have already seen


array = [2, 1, 5, 2, 3, 3, 4]


function firstDupVal(array) {
    let seenIndex = array.length; // initialize
    for (let i = 0; i < array.length; i++) { //setup first for loop
        const value = array[i]; //grabbing the value at index
        for (let j = i + 1; j < array.length; j++) { //setup our nested forloop whatever j is at plus 1
            const valueComp = array[j]; //getting the value at index j
            if (value === valueComp) { //comparing values
                seenIndex = Math.min(seenIndex, j); //update min 2nd index
            }
        }
    }

    if (seenIndex === array.length) return -1; //if we didnt find dups we can return -1 otherwise return min index

    return array[seenIndex];
}

console.log(firstDupVal(array));
