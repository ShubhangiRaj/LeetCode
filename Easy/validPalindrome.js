// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

function validPalindrome(s){
    if(s.length === 1){
        return true;
    }
    let left = 0;
    let right = s.length - 1;
    let specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-= ";
    while(left < right){
        if(specialChars.indexOf(s[left]) > -1 && specialChars.indexOf(s[right]) === -1){
            // special char is present therefore left++
            left++;
        }else if(specialChars.indexOf(s[right]) > -1 && specialChars.indexOf(s[left]) === -1){
            right--;
        }else if(specialChars.indexOf(s[left]) > -1 && specialChars.indexOf(s[right])> -1){
            left++;
            right--;
        }else if(specialChars.indexOf(s[left]) === -1 && specialChars.indexOf(s[right] === -1)){
            if(s[left].toLowerCase() === s[right].toLowerCase()){
                left++;
                right--;
            } else {
                console.log("not a palindrome");
                return false;
            }
        }
    }
    console.log("is a palindrome");
    return true;
}
validPalindrome("A man, a plan, a canal: Panama");
validPalindrome("race a car");
validPalindrome(" ");
validPalindrome("     ");
validPalindrome("     aa");
validPalindrome("     aa     ");
validPalindrome("a    a");