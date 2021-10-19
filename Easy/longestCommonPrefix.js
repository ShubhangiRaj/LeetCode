var longestCommonPrefix = function(strs) {
    //     1st iteration find the shortest length word. 
        let shortestLengthWord = strs[0];
        for(let i = 1; i < strs.length; i++){
            if(strs[i].length < shortestLengthWord.length){
                shortestLengthWord = strs[i];
            } else {
                continue;
            }
        }
        console.log(shortestLengthWord);
    //     run a loop basis of length of shortestLengthWord
        let commonPrefix = "";
        let loopCount = shortestLengthWord.length;
        let tempArr = [];
        while(loopCount > 0){
            for(let i = 0; i < strs.length; i++){
                if(strs[i].includes(shortestLengthWord)){
                   tempArr.push(strs[i]);
                } else{
                    tempArr = [];
                    break;
                }
                if(tempArr.length === strs.length){
                    commonPrefix = shortestLengthWord;
                    console.log(commonPrefix);
                    return commonPrefix;
                }
            }
            loopCount--;
            shortestLengthWord = shortestLengthWord.slice(0, loopCount);
    
        }
        console.log("");
        return "";
};

// longestCommonPrefix(["flower","flow","flight"]);
longestCommonPrefix(["dog","racecar","car"]);
longestCommonPrefix(["reflower","flow","flight"]); // fails in this case;

// todo