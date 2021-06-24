//create a function that take two non-empty arrays of integers, finds the pair of nums ex one from each arr where the absolulte value is closest to zero and then returns an array containing those two nums

//here are the inputs
//array1 = [-1, 5, 10 , 20, 28, 3]
//array2 = [26, 134, 135, 15, 17]

// here are the outputs

// [28, 26]

//what do we know?
// we know the sample out put has to be [28, 26], the arrays are not sorted (would it be easier if they were?), we are needing two numbers that are closest to 0 as possible as the difference
//we can use the pointer method through each array to sort them through ex is -1 smaller than 5? yes and so on and so fourth
// we should sort the arrays 

//

arrayOne = [-1, 5, 10, 20, 28, 3];
arrayTwo = [26, 134, 135, 15, 17];

function smallestDiff(arrayOne, arrayTwo) {
    arrayOne.sort((a, b) => a - b);
    // console.log(arrayOne);
    arrayTwo.sort((a, b) => a - b);
    // console.log(arrayTwo);
    indexOne = 0; //our pointers
    indexTwo = 0;
    let smallestVar = Infinity; // allows to simplify code because infinity will always be greater
    let currDiff = Infinity;
    let newArr = [];
    while (indexOne < arrayOne.length && indexTwo < arrayTwo.length) {
        let firstNum = arrayOne[indexOne];
        let secondNum = arrayTwo[indexTwo];
        if (firstNum < secondNum) {
            currDiff = secondNum - firstNum;
            indexOne++;

        } else if(secondNum < firstNum){
            currDiff = firstNum - secondNum;
            indexTwo++;
        } else {
            return [firstNum, secondNum];
        }
        //updating smallest diff
        if (smallestVar > currDiff) {
            smallestVar = currDiff;
            newArr = [firstNum, secondNum];
        }


    }
    return newArr;

}


console.log(smallestDiff(arrayOne, arrayTwo));