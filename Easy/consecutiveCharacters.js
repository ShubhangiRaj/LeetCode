var maxPower = function(s) {
    let p1 = 1;
    let currentCount = 1;
    let maxCountSoFar = 1;
    while(p1 !== s.length){
        if(s[p1] === s[p1-1]){
            currentCount++;
            if(currentCount > maxCountSoFar){
                maxCountSoFar = currentCount;
            }
            if(p1 === s.length - 1){
                return maxCountSoFar > currentCount ? maxCountSoFar : currentCount;
            }
        } else if (s[p1] !== s[p1-1]){
            if(maxCountSoFar < currentCount){
                maxCountSoFar = currentCount;
            } else {
                currentCount = 1;
            }
        }
        p1++;
    }
    console.log(maxCountSoFar);
};

maxPower("eeee");