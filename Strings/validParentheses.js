// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Example 1:
// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.


function isValid(s) {
    stack = []; //our empty array
    hashMap= {'(' : ')', '{' : '}', '[' : ']'} ;
    
    for( let i = 0; i < s.length; i++){ //iterating through every character in the input string
        let character= s[i]
        
        if(hashMap[character]){ // if current character is one of the left braces, put it in the stack
            stack.push(character);
        } else if(hashMap[stack.pop()] !== character){ // only gets his if current charactor is one opf these right halfs of the hash map.
            return false;
        }
    }
    
    return stack.length === 0;
    
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));