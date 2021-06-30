//write a function that takes in an array of integers and returns a sorted version of that array. Use the quick sort algo to sort the array


//input
// array = [ 8, 5, 2, 9, 5, 6, 3]
//       p  L              R

//output
// [2, 3, 5, 6, 8, 9]


//we will have a pivot (8) and we are going to move everything from < 8 to the left and > to the right
//we while have to loop through 
//we will have to check if the numbers being pointed are less than or greater than our pivot
//eventually swapping the numbers throught he array until everything less than 8 is on the left and everything on the right is greater than 8


array = [ 8, 5, 2, 9, 5, 6, 3] 
function quickSort(array) { //calling our recursive helper function
    helper(array, 0, array.length - 1);
    return array;
}

function helper(array, startIndex, endIndex) {//boundries of the subarrays
    if (startIndex >= endIndex) //base case for quicksort find out if there is something to do
        return;
    const pivotIndex = startIndex; // defining out pivot
    let leftIndex = startIndex + 1; //would intially be 5
    let rightIndex = endIndex; //would be intially 3
    while (rightIndex >= leftIndex) { //iterating throught he array with therse pointers
        if (array[leftIndex] > array[pivotIndex] && array[rightIndex] < array[pivotIndex]) { //checking weither if we need to swap or increment the pointers
            swap(leftIndex, rightIndex, array)
        }
        if (array[leftIndex] <= array[pivotIndex]) //if smaller or = to pivot than it is technically sorted
            leftIndex++;
        if (array[rightIndex] >= array[pivotIndex]) //decrement the right index cause it is technically sorted
            rightIndex--;
    }
    swap(pivotIndex, rightIndex, array);
    const leftSubArr = rightIndex - 1 - startIndex < endIndex - (rightIndex + 1) //left sub array is one to the left
    if (leftSubArr) {
        helper(array, startIndex, rightIndex - 1); // left is smaller so started atstarted index and ending
        helper(array, rightIndex + 1, endIndex);
    } else {
        helper(array, rightIndex + 1, endIndex);
        helper(array, startIndex, rightIndex - 1);
    }
}
function swap(i, j, array) { //defining our swap function
    let temp = array[j];
    array[j] = array[i]
    array[i] = temp;
}

console.log(quickSort(array));