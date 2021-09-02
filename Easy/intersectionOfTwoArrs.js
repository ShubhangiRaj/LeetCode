// Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must be unique and you may return the result in any order.

var intersection = function(nums1, nums2) {
    if(!nums1.length){
        console.log(nums2);
        return nums2;
    } else if(!nums2.length){
        console.log(nums1);
        return nums1;
    } else if(!nums1.length && !nums2.length){
        console.log([])
        return [];
    } else {
        let resultArr = [];
        for(let num of nums2){
            if(nums1.indexOf(num) > -1 && resultArr.indexOf(num) === -1){
                resultArr.push(num);;
            }
        }
        console.log(resultArr);
        return resultArr;   
    }
};

// intersection([4,9,5], [9,4,9,8,4]);
intersection([4,9,5], [2,3]);