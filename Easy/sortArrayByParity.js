var sortArrayByParity = function(nums) {
    if(nums.length === 1){
        return nums;
    }
    let endIndex = nums.length;
    let count = 0;
    let startIndex = 0;
    while(startIndex < endIndex){
        if(nums[startIndex] % 2 === 0){
            startIndex++;
        } else if(nums[startIndex] % 2 !== 0){
            nums.push(nums[startIndex]);
            nums.splice(startIndex, 1);
        }
    }
    console.log(nums);
};

sortArrayByParity([3,1,2,4,5]);