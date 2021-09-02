var numIdenticalPairs = function(nums) {
    let pointer_1 = null;
    let pointer_2 = null;
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])){
            continue;
        } else {
            pointer_1 = i;
            pointer_2 = nums.lastIndexOf(nums[i]);
            while(pointer_2 !== pointer_1){
                count++;
                let tempNumsArr = nums.slice(0, pointer_2);
                pointer_2 = tempNumsArr.lastIndexOf(nums[i]);
            }
        }
    }
    console.log(count);
    return count;
};

numIdenticalPairs([1,2,3,1,1,3]);
numIdenticalPairs([1,1,1,1]);
numIdenticalPairs([1,2,3]);