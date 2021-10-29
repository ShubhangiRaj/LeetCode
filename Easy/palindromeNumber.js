// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 
// 121 is palindrome while 123 is not.

function isPalindrome(x){
    if(x < 0 || (x % 10 === 0 && x !== 0)){
        console.log(false);
        return false;
    }
    let num = x;
    let reverseNum = 0;
    while(num > 0){
        reverseNum = reverseNum * 10 + num % 10;
        num = parseInt(num/10);
    }
    if(x === reverseNum){
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}

isPalindrome(121);
isPalindrome(-121);
isPalindrome(123);
isPalindrome(100);

