// Given a binary array nums, return the maximum number of consecutive 1's in the array 
// if you can flip at most one 0.

function findMaxConsecutiveOnes(nums){
    if(nums.indexOf(1) === -1){
        console.log(0);
        return 0;
    }
    if(nums.indexOf(0) === -1){
        console.log(nums.length);
        return nums.length;
    }
    let startPointer = 0;
    let endPointer = 0;
    let maxWindowSize = 0;
    let numOfZeros = 0;
    let currWindowSize = 0;
    while(endPointer !== nums.length){
        if(nums[endPointer] === 1){
            currWindowSize = startPointer === 0 ? endPointer - startPointer : (endPointer - startPointer) + 1;
            maxWindowSize = Math.max(maxWindowSize, (endPointer - startPointer) + 1);
            endPointer++;
        }
        else if(nums[endPointer] === 0 && numOfZeros === 0){
            currWindowSize = startPointer === 0 ? endPointer - startPointer : (endPointer - startPointer) + 1;
            maxWindowSize = Math.max(maxWindowSize, (endPointer - startPointer) + 1);
            endPointer++;
            numOfZeros++;
        }
        else if(nums[endPointer] === 0 && numOfZeros > 0){
            currWindowSize = startPointer === 0 ? endPointer - startPointer : (endPointer - startPointer) + 1;
            maxWindowSize = Math.max(maxWindowSize, (endPointer - startPointer) + 1);
            numOfZeros = 0;
            startPointer++;
            endPointer = startPointer;
        }
    }
    console.log(maxWindowSize);
    return maxWindowSize;
}

findMaxConsecutiveOnes([1,1,1,0,1,0]);

// todo