var checkZeroOnes = function(s) {
    // if no 0s in string
    if(s.indexOf(0) < 0){
        return s.length;
    } else if(s.indexOf(1) < 0){
        return false;
    }
    // call a utility function for getting maxCongtiguous1s and maxContiguous0s
    let maxContiguous0s = findMaxConsecutives(s, '0');
    let maxCongtiguous1s = findMaxConsecutives(s, '1');

    console.log(maxContiguous0s, maxCongtiguous1s);
    console.log(maxCongtiguous1s > maxContiguous0s ? true : false);
    return maxCongtiguous1s > maxContiguous0s ? true : false;
};
checkZeroOnes("111000");

function findMaxConsecutives(str, k){
    // find max consecutive Ks in str
    let currentCount = 0;
    let maxCountSoFar = 0;
    for(let i = 0; i <= str.length; i++){
        if(i === str.length){
            return maxCountSoFar > currentCount ? maxCountSoFar : currentCount;
        }
        if(str[i] === k){
            currentCount++;
        } else if(str[i] !== k){
            if(currentCount > maxCountSoFar){
                maxCountSoFar = currentCount;
            }
            currentCount = 0;
        }
    }
    return maxCountSoFar;
}

// Given a binary string s, return true if the longest contiguous segment of 1s is strictly longer than the longest contiguous segment of 0s in s. Return false otherwise.
