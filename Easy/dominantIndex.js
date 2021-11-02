var dominantIndex = function(nums) {
    let largestNumInArr = Math.max(...nums);
    let indexOfLargestNumInArr = nums.indexOf(largestNumInArr);
    for(let i = 0; i < nums.length; i++){
        if(i == indexOfLargestNumInArr){
            continue;
        }
        let twiceOfNum = nums[i] * 2;
        if(twiceOfNum > largestNumInArr){
            return -1;
        } else {
            continue;
        }
    }
    return indexOfLargestNumInArr;
};

dominantIndex([3,6,1,0]);