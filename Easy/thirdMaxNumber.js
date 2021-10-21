// Given integer array nums, return the third maximum number in this array. 
// If the third maximum does not exist, return the maximum number.

var thirdMax = function(nums) {
    let maximum = new Set;
     for(let num of nums){
         maximum.add(num);
         if(maximum.size > 3){
             maximum.delete(Math.min(...maximum));
         }
     }
     if(maximum.size === 3){
         console.log(Math.min(...maximum))
         return Math.min(...maximum);
     } else {
         console.log(Math.max(...maximum));
         return Math.max(...maximum);
     }
 };

 thirdMax([1,2,2,5,3,5]);
// thirdMax([2,2,3,1]);
// thirdMax([3,2,1]);
// thirdMax([1,2])

