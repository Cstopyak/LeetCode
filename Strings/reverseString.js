//write a function that takers in a string of words separated by one or more whitespaces and returns a string that has the words in reverse order.

//ex "hello whatsup"
// returns "whatsup hello"


//reinstated question
//I am trying to take in a string and reverse the order that its in

//inputs "hello whatsup"
//outputs "whatsup hello"

// how  i write an example?

// function reverseString(string){
// create a list to store the string (defining)
// identify the starting index and track
//loop through the string to idenitfy
//we have to check two arguements indexes without spacing and indexes with spacing
// return out list reversed

//}

//function reverse(ls){
    //identify our pointers to be able to reverse our list
    // start=0
    // lists.length -1 this is ending pointer
    //have to loop through as long as the starting index and end index is not greater or equal to (lessthan)
    //move the pointers
//}

//inputs reverseString("hello whatsup")

function reverseString(string) {
    const words = []; //defining out list
    let startingWord = 0; //creating our index tracker
    for (let index = 0; index < string.length; index++) { //looping through our string
        const char = string[index] //getting character in the string
        if (char === " ") { //see if character is space or start of word is space
            words.push(string.slice(startingWord, index)); //creating the word
            startingWord = index; //current index
        } else if (string[startingWord] === ' ') {
            words.push(' ');
            startingWord = index;
        }
    }
    words.push(string.slice(startingWord)); // adding last word into the list

    reverseList(words); //new function that reverses list
    return words.join(''); //taking all elements and combine

}

function reverseList(list) {
    let start = 0; //starting index
    end = list.length - 1; // accessing first and last index and moving the pointers
    while (start < end) {
        const temp = list[start];
        list[start] = list[end];
        list[end] = temp;
        start++; //moving pointers closer together
        end--;
    }
}

reverseString("hey whats up");

console.log(reverseString("hey whats up"));