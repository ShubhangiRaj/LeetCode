var smallerNumbersThanCurrent = function(nums) {
    let resultArr = [];
    let freqHashmap = {};
    for(let num of nums){
        if(freqHashmap[num]){
            freqHashmap[num] += 1;
        } else {
            freqHashmap[num] = 1;
        }
    }
    console.log(freqHashmap);
    for(let num of nums){
        // if length of freqHashmap keys and nums array is same, all nums are present once.
        if(Object.keys(freqHashmap).length === nums.length){
            while(nums.length > 0){
                resultArr.push(1);
                nums.length--;
            }
        }
        // if length of freqHashmap keys is 1, then only 1 number is occuring multiple times.
        if(Object.keys(freqHashmap).length === 1){
            while(nums.length > 0){
                resultArr.push(0);
                nums.length--;
            }
        }
        // if(Object.keys(freqHashmap).length !== nums.length){
        //     for(let key of Object.keys(freqHashmap)){
        //         if(num === key){
        //             continue;
        //         } else if(num > key){
        //             resultArr.
        //         }
        //     }
        // }
    }
};
// smallerNumbersThanCurrent([7,7,7,7,7]);
smallerNumbersThanCurrent([6,5,4,8]);
smallerNumbersThanCurrent([8,1,2,2,3]);