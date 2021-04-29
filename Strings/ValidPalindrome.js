//Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Constraints:
// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.


function isPalindrome(string) {
    //Cleaning input string
    string = string.toLowerCase().replace(/[\W_]/g, ""); //allowing to grab all items and replacing them with an empty string
    let left = 0;
    let right = string.length - 1;

    while (left < right) {
        if (string[left] !== string[right]) {
            return false;   
        }
        left++;
        right--;

    }
    return true;

}
console.log(isPalindrome("A man, a plan, a canal: Panama"));

// function isPalindrome(s) {
//     s = s.toLowerCase().replace(/[\W_]/g, "");
//     let left = 0;
//     let right = s.length - 1;
//     while (left < right) {
//         if (s[left] !== s[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }

//     return true;
// }

// console.log(isPalindrome("race a car"));

