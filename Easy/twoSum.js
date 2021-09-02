var twoSum = function(nums, target) {
    if(nums.length === 1 && target === nums[0]){
        return 0;
    }
    let hashMap = {};
    for(let i = 0; i < nums.length; i++){
        hashMap[nums[i]] = target - nums[i];
    }
    console.log(hashMap);

    for(let i in hashMap){
        let indexOfFirstNum = nums.indexOf(parseInt(i));
        let indexOfSecondNum = nums.lastIndexOf(hashMap[i]);
        if(indexOfSecondNum > -1 && indexOfSecondNum !== indexOfFirstNum){
            console.log([indexOfFirstNum, indexOfSecondNum]);
            return;
        } else {
            continue;
        }
    }
    return 0;
};

twoSum([3,3], 6);