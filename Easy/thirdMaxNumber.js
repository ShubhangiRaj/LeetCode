// Given integer array nums, return the third maximum number in this array. 
// If the third maximum does not exist, return the maximum number.

var thirdMax = function(nums) {
    if(nums.length < 3){
        console.log(Math.max(...nums));
        return Maths.max(...nums);
    }

};

thirdMax([2,2,3,1]);
thirdMax([3,2,1]);
thirdMax([1,2])

// todo