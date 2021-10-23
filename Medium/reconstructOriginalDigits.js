// Given a string s containing an out-of-order English representation of digits 0-9,
// return the digits in ascending order.

// Constraints:
// 1 <= s.length <= 105
// s[i] is one of the characters ["e","g","f","i","h","o","n","s","r","u","t","w","v","x","z"].
// s is guaranteed to be valid.

// Input: s = "owoztneoer"
// Output: "012"

var originalDigits = function(s) {
    let numsHashmap = {
        "0": ["z", "e", "r", "o"],
        "1": ["o", "n", "e"],
        "2": ["t", "w", "o"],
        "3": ["t", "h", "r", "e", "e"],
        "4": ["f", "o", "u", "r"],
        "5": ["f", "i", "v", "e"],
        "6": ["s", "i", "x"],
        "7": ["s", "e", "v", "e", "n"],
        "8": ["e", "i", "g", "h", "t"],
        "9": ["n", "i", "n", "e"],
    }
    let charsHashmap = {
        "e": [0, 1, 3, 5, 7, 8, 9],
        "g": [8],
        "f": [4, 5],
        "i": [5, 6, 8, 9],
        "h": [3],
        "o": [0, 1, 2, 4],
        "n": [1, 7, 9],
        "s": [6, 7],
        "r": [0, 3, 4],
        "u": [4],
        "t": [2, 3, 8],
        "w": [2],
        "v": [5, 7],
        "x": [6],
        "z": [0]
    }
    let numsArr = [];
    for(let i = 0; i < s.length; i++){
        if(charsHashmap[s[i]]){
            for(let num in charsHashmap[s[i]]){
                if(numsArr.indexOf(num) === -1){
                    numsArr.push(num);
                }
            }
        }
    }
    console.log(numsArr);
    let finalNumsArr = [];
    for(let i = 0; i < numsArr.length; i++){
        if(numsArr[i])
    }
};

originalDigits("owoztneoer");

// todo