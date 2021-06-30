// given an array of integers between 1 and n, inclusive, where n is the length of the array.
//write a functiont hat returns the first integer that appears more than once

//ex. the function should return the ones whos first dup value has the min index

// array = [2, 1, 5, 2, 3, 3, 4]

// looks like the 2 shows up before any other dups
// we will need something to keep track of what we have already seen


array = [2, 1, 5, 2, 3, 3, 4]


function firstDupVal(array) {
    let seenIndex = array.length;
    for (let i = 0; i < array.length; i++) {
        const value = array[i];
        for (let j = i + 1; j < array.length; j++) {
            const valueComp = array[j];
            if (value === valueComp) {
                seenIndex = Math.min(seenIndex, j);
            }
        }
    }

    if (seenIndex === array.length) return -1;

    return array[seenIndex];
}

console.log(firstDupVal(array));
