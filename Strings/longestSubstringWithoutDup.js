// Given a string s, find the length of the longest substring without repeating characters.
// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:
// Input: s = ""
// Output: 0

// Constraints:
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.


// function LongestSubstringWithoutRep(string){
//     let charsHashMap= {}; //contains all char in input string and earliest they can be found
//     let startIdx= 0;
//     let maxLen= 0; //function gonna be able to return and be able to update within the for loop

//     for( let i = 0; i < string.length; i++){ //iterating through input string
//         const endChar = string[i];
//         //check to see if it has not been found within our sliding idx
//         if(charsHashMap[endChar] >= startIdx){
//             startIdx = charsHashMap[endChar] + 1 //moving one above idx
//         }

//         charsHashMap[endChar] = i;// allows to update while incrasing idx && would update new position for dupes
//         maxLen = Math.max(maxLen, i - startIdx +1); //updating max len and our sliding idx

//     }
//     return maxLen;
// }

// console.log(LongestSubstringWithoutRep("abcabcbb"));
// console.log(LongestSubstringWithoutRep("bbbbb"));
// console.log(LongestSubstringWithoutRep("pwwkew"));
// console.log(LongestSubstringWithoutRep("abc"));

//actual string
function LongestSubstringWithoutRep2(string){
    const hashMap= {};
    let maxLen = [0,1];
    let startIdx= 0;

    for( let i = 0; i < string.length; i ++){
        const char = string[i];
        if( char in hashMap){
            startIdx = Math.max(startIdx, hashMap[char] + 1)
        }
        if(maxLen[1] - maxLen[0] < i + 1 - startIdx){
            maxLen = [startIdx, i + 1];
        }
        hashMap[char] = i;
    }
    return string.slice(maxLen[0], maxLen[1]);
};

console.log(LongestSubstringWithoutRep2("abcabcbb"));