function findMaxConsecutiveOnes(nums) {
    // invlaid array
    if(!nums.length){
        return 0
    } 
    // if no 0 in the array
    if(nums.indexOf(0) < 0){
        return nums.length
    }
    let currentCount = 0;
    let maxCountSoFar = 0;
    for(let i = 0; i <= nums.length; i++){
        if(i == nums.length && currentCount > maxCountSoFar){
            maxCountSoFar = currentCount;
            return maxCountSoFar;
        } else if(i == nums.length && currentCount < maxCountSoFar){
            return maxCountSoFar;
        }
        if(nums[i] === 1){
            currentCount += 1;
        } else if(nums[i] === 0){
            if(currentCount > maxCountSoFar){
                maxCountSoFar = currentCount;
            }
            currentCount = 0;
        }
    }
    console.log(maxCountSoFar);
    return maxCountSoFar;
};

findMaxConsecutiveOnes([1,1,0,0,1,1,1])

// time complexity O(n)
// space complexity O(1)