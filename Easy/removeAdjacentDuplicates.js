// You are given a string s consisting of lowercase English letters.
// A duplicate removal consists of choosing two adjacent and equal letters and removing them.
// We repeatedly make duplicate removals on s until we no longer can.
// Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

// var removeDuplicates = function(s) {
//     console.log(recursiveRemoveDups(s));
//     return recursiveRemoveDups(s);
// };

// function recursiveRemoveDups(s){
//     if(s.length === 1){
//         return s;
//     }
//     for(let i = 1; i < s.length; i++){
//         if(s[i - 1] === s[i]){
//             s = s.slice(0, i - 1) + s.slice(i + 1, s.length);
//             return recursiveRemoveDups(s);
//         }
//     }
//     return s;
// }

// removeDuplicates("abbaca"); // "ca"
// removeDuplicates("azxxzy"); // "ay"
// removeDuplicates("aaaa");
// removeDuplicates("aaa");
// removeDuplicates("fdabccbacde");

// recursive approach leads to runtime error

// Optimal solution using stacks
var removeDuplicates = function(s) {
    let stack = [s[0]];
    for(let i = 1; i < s.length; i++){
        if(stack[stack.length - 1] == s[i]){
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    console.log(stack.join(""));
    return stack.join("");
};

removeDuplicates("abbaca"); // "ca"
removeDuplicates("azxxzy"); // "ay"
removeDuplicates("aaaa");
removeDuplicates("aaa");
removeDuplicates("fdabccbacde");

// Time complexity : O(N), where N is a string length.
// Space complexity : O(N−D) where D is a total length for all duplicates.