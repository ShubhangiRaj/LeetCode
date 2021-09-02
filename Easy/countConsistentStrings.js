var countConsistentStrings = function(allowed, words) {
    let count = null;
    for(let word of words){
        if(word.length === 1 && allowed.indexOf(word) > -1){
            count++;
        } else {
            let tempCount = 0;
            for(let char of word){
                if(allowed.indexOf(char) > -1){
                    tempCount++;
                } else {
                    break;
                }
            }
            if(tempCount === word.length){
                count++;
            }
        }
    }
    console.log(count);
    return count;
};

countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"]);
countConsistentStrings("cad", ["cc","acd","b","ba","bac","bad","ac","d"]);

// Example 1:
// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

// Example 2:
// Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
// Output: 7
// Explanation: All strings are consistent.

// Example 3:
// Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
// Output: 4
// Explanation: Strings "cc", "acd", "ac", and "d" are consistent.