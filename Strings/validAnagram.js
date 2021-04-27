// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.


function isAnagram(s, t){
    if (s.length !== t.length){
        return false;
    }

    const sCharacterCount= {};

    //how to fill schar count
    // we will need to loop
    for( let i= 0; i < s.length; i++) {
        const sCharacter = s[i];
        sCharacterCount[sCharacter] = sCharacterCount[sCharacter] + 1 || 1; //or operator allows the const sCharacter to be put in

    }
    //loop over t string
    for (let i = 0; i < t.length; i++){
        const tCharacter = t[i];
        if(!sCharacterCount[tCharacter]){ //this would be met if we used up all characters and at 0
            return false;
        }
        else{
            sCharacterCount[tCharacter] -- //have to make sure they have the same quantities
        }
    }

    return true;
}

console.log(isAnagram("rat", "car")); //should be false

console.log(isAnagram("anagram", "nagaram")); // should be true