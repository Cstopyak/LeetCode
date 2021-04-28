// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Example 1:
// Input: strings = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:
// Input: strings = [""]
// Output: [[""]]
// Example 3:
// Input: strings = ["a"]
// Output: [["a"]]

//***************************************

//we have to return a list of other lists that are groups of anagrams
//we have a bunch of words and we would want to group them
//one way we can do this is to sort through them and identify the groups
//we could also create a new array of indexes and sort through them
//create a hash table for the anagrams
//we can iterate through the arrays and identify what anagram we are working with
//*************************************** 

// function groupAnagram(strings){
//     let groupString= {};

//     for(let i = 0; i < strings.length; i++){
//         const word = strings[i];
//         const wordKey= word.split('').sort().join(''); // this is going to allow the strs to be split and joined back into a string

//         if(!groupString[wordKey]){ // if we dont have grouped at the index wordkey, this is going to setup an empty array and fill it up
//             groupString[wordKey]= []
//         };

//         groupString[wordKey].push(word);
//     }

//     return Object.values(groupString);

// }
// console.log(groupAnagram(["eat","tea","tan","ate","nat","bat"]));
// console.log(groupAnagram([""]));
// console.log(groupAnagram(["a"]));

//example two

function groupAnagrams(strings){
    let anagrams={};//our hashtable
    for(const string of strings){
        const wordsSorted= string.split('').sort().join(''); //
        
        if(wordsSorted in anagrams){ //if the sorted word in the anagram has table, then 
            anagrams[wordsSorted].push(string);

        } else{
            anagrams[wordsSorted]= [string]; //create new group of words if we are seeing the new anagram
        }
    }
    
    
    
    return Object.values(anagrams); //this would be the new list from the hash table
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));