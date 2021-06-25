//given an array of intergers and an integer, write a function that moves all instances of that interfer in the array to the end of the array and return the array

//our input 
//array= [2, 1, 2, 2, 2, 3, 4, 2]
//single integer = 2

//output
// [ 1, 3, 4, 2, 2, 2, 2, 2, 2]

//how to solve this?
//lets try to keep track with two pointers one at the begining like (i) and another one at the end of the array (j)
//the end of the array is where we want to swap the values
//the i will server to swap numbers that arn't in the beginning of the array




array = [2, 1, 2, 2, 2, 3, 4, 2];
integer = 2;



function moveElemToEnd(array, integer) {
    let i = 0;
    let j = array.length - 1;
    while (i < j) {
        while (i < j && array[j] === integer) j--;
        if (array[i] === integer) swap(i, j, array);
        i++;
    }
    return array;
}

function swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;

}

console.log(moveElemToEnd(array, integer));
