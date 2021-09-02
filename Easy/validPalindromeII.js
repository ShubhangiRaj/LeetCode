// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

var validPalindrome = function(s) {
    if(s.length === 1){
        return true;
    }
    let left = 0;
    let right = s.length - 1;
    while(left < right){
        if(s[left] === s[right]){
            left++;
            right--;
        } else if(s[left] !== s[right]){
           return isPalindrome(s, left, right-1) || isPalindrome(s, left+1, right);
        }
    }
    return true;
};

function isPalindrome(str, startIndex, endIndex){
    let left = startIndex;
    let right = endIndex;
    while(left < right){
        console.log(str.substr(startIndex, endIndex - startIndex));
        if(str[left] != str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(validPalindrome("abcccdcba"));

// todo