// Given an array, rotate the array to the right by k steps, where k is non-negative.

// function rotateArray(arr, k){
//     while(k > 0){
//         let elem = arr.pop();
//         arr.unshift(elem);
//         k--;
//     }
//     console.log(arr);
//     return arr;
// }
// var rotateArray = function(nums, k){
//     let resultArr = [];
//     let startIndex = nums.length - k;
//     for(let i = startIndex; i < nums.length; i++){
//         resultArr.push(nums[i]);
//     }
//     for(let i = 0; i < startIndex; i++){
//         resultArr.push(nums[i]);
//     }
//     console.log(resultArr);
//     return resultArr;
// }
var rotate = function(nums, k){
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k-1);
    reverse(nums, k, nums.length - 1);
    console.log(nums);
    return nums;
}
var reverse = function(nums, startIndex, endIndex){
    while(startIndex < endIndex){
        [nums[startIndex], nums[endIndex]] = [nums[endIndex], nums[startIndex]];
        startIndex++;
        endIndex--;
    }
    console.log(nums);
    return nums;
}
rotateArray([1,2,3,4,5,6,7], 0);
rotateArray([-1,-100,3,99], 4);

// todo