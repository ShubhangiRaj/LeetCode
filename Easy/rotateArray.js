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
var rotateArray = function(nums, k){
    let resultArr = [];
    let startIndex = nums.length - k;
    for(let i = startIndex; i < nums.length; i++){
        resultArr.push(nums[i]);
    }
    for(let i = 0; i < startIndex; i++){
        resultArr.push(nums[i]);
    }
    console.log(resultArr);
    return resultArr;
}
rotateArray([1,2,3,4,5,6,7], 3);
rotateArray([-1,-100,3,99], 2);