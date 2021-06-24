

array= [5,1,22,25,6,-1,8,10];
sequence = [1,6,-1,10]

function isValidSubsequence(array, sequence) {
    
    arrayIndex = 0;
    seqIndex = 0;
    while (arrayIndex < array.length && seqIndex < sequence.length) {
        if (array[arrayIndex] === sequence[seqIndex])
            seqIndex++;
        arrayIndex++;
    }
    return seqIndex === sequence.length;
}

console.log(isValidSubsequence(array, sequence));