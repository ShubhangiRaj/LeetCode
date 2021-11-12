var removeElement = function(nums, val){
    let pointer1 = 0;
    let pointer2 = nums.length - 1;
    while(pointer1 < pointer2){
        if((nums[pointer1] == val && nums[pointer2] !== val)){
//             swap
            [nums[pointer1], nums[pointer2]] = [nums[pointer2], nums[pointer1]];
            pointer1++;
            pointer2--;
        } else if((nums[pointer1] !== val && nums[pointer2] == val)){
            pointer1++;
            pointer2--;
        } else if(nums[pointer1] == val && nums[pointer2] == val){
            pointer2--;
        } else if(nums[pointer1] !== val && nums[pointer2] !== val){
            pointer1++;
        }
    }
    console.log(nums);
    console.log(pointer1 + 1);
    return pointer1 + 1;
}

// arr =[3,2,2,3], val = 3
// Output => [2,2]

removeElement([0,1,2,2,3,0,4,2], 2)

// todo