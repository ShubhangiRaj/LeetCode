var removeElement = function(nums, val){
    for(let [index, value] of nums.entries()){
        if(value == val){
            nums[index] = "_";
        }
        if(value !== val && index > nums.indexOf("_")){
           if(nums.indexOf("_") == -1){
            continue;
            } else{
               nums[nums.indexOf("_")] = value;
               nums[index] = "_";
            }
        }
    }
    console.log(nums);
    let countOfRemainingElems = 0;
    let i = 0;
    while(i < nums.length){
        if(nums[i] !== "_"){
            countOfRemainingElems++;
        }
        i++;
    }
    return countOfRemainingElems, nums;
}

// arr =[3,2,2,3], val = 3
// Output => [2,2]

removeElement([3,4,2,2,3,4,1,2], 3)