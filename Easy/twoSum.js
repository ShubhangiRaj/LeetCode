var twoSum = function(nums, target) {
    if(nums.length === 1 && target === nums[0]){
        return;
    }
    let hashMap = {};
    for(let i = 0; i < nums.length; i++){
        let value = target - nums[i]
        if(value in hashMap){
            console.log([hashMap[value], i]);
            return [hashMap[value], i];
        } else {
            hashMap[nums[i]] = i;
        }
    }
    console.log(hashMap);
    return;
};

twoSum([2,7,11,15], 9);