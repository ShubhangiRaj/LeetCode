// Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
// Find the kth positive integer that is missing from this array.

var findKthPositive = function(arr, k) {
    //     1st case, if k < arr[0], then return value of k
        // [5,6,7], k = 2 then kth missing is the value of k itself
        if(k < arr[0]){
            console.log(k);
            return k;
        }
    //    2nd case, if arr contains nums starting from 1 to n, without any missing nums in between, then kth missing is arr[arr.length] + k
            // let missingNums = false;
            // for(let i = 0; i < arr.length - 1; i++){
            //     if(arr[i+1] === arr[i] + 1){
            //         continue;
            //     } else {
            //        missingNums = true;
            //         break;
            //     }
            // }
            // if(missingNums === false){
            //     console.log(arr[arr.length - 1] + k);
            //     return arr[arr.length - 1] + k;
            // }
    //     3rd case, if there are missing nums in the arr
        let missingNumsArr = [1];
        let num = 1;
        while(num <= arr[arr.length - 1]){
            num++;
            if(arr.indexOf(num) > -1){
                continue;
            } else {
                missingNumsArr.push(num);
            }
        }
        console.log(missingNumsArr);
        console.log(missingNumsArr[k - 1]);
        return missingNumsArr[k - 1];
    };

    findKthPositive([2,3,4,7,11], 5);
    findKthPositive([1,2,3,4], 2);
    findKthPositive([4,5,6,8], 2);
    findKthPositive([1,3], 1);