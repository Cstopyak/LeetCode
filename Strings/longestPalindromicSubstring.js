//Given a string s, return the longest palindromic substring in s.
// Example 1:
// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:
// Input: s = "cbbd"
// Output: "bb"
// Example 3:

// Input: s = "a"
// Output: "a"
// Example 4:

// Input: s = "ac"
// Output: "a"
// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters (lower-case and/or upper-case),


function longestPalindrome(string){

    let Index = 0;
    let maxLen= 1;

    function startAroundMiddle(leftidx, rightidx){
        while(leftidx >= 0 && rightidx < string.length && string[leftidx] === string[rightidx]){ //indexs are starting in middle of palindrome and expanding if we do have a valid palindrome
            const currPalindromeLeng = rightidx - leftidx + 1;
            if(currPalindromeLeng > maxLen){
                maxLen = currPalindromeLeng;
                Index = leftidx;
            }
            leftidx -= 1;
            rightidx +=1;
        }
    }
    for( let i = 0; i < string.length; i++){ //in the for loop we are treating the end as the middle and the second start middle is expecting all the spaces therefore inbetween the spaces is the middle
        startAroundMiddle(i -1, i +1);
        startAroundMiddle(i, i+ 1)

    }

    return string.slice(Index, Index + maxLen);
}

console.log(longestPalindrome("babad"));