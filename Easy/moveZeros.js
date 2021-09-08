// Given an integer array nums, move all 0's to the end of it 
// while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

function moveZeros(nums){
    let pointer_1 = 0;
    let pointer_2 = 0;
    while(pointer_2 < nums.length){
        if(nums[pointer_1] !== 0){
            pointer_1++;
            pointer_2++;
        } else if(nums[pointer_1] === 0){
            while(nums[pointer_2] !== 0){
                pointer_2++;
            }
        }
    }
}

// todo