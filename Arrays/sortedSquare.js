// write a function that takes in a non empty array of int that are sorted in order and returns a new array but squared in order

// array  input [1,2,3,5,6,8,9] 
//output [1,4,9,25,36,64,81]


array = [1,2,3,5,6,8,9] 

function sortedSquared(array){
    const sSquares = new Array(array.length).fill(0); // defining my variable

    for( let index = 0; index < array.length; index++){ //defining my for loop
        const val = array[index];
       
        sSquares[index] = val * val;
        
    }
    
    sSquares.sort((a,b) => a-b);
    return sSquares;
}

console.log(sortedSquared(array));