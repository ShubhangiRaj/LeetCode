// Given an integer array nums, move all 0's to the end of it 
// while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

function moveZeros(arr){
    if(arr.length === 1){
        return arr;
    }
    let zeroIndex = 0;
    let nonZeroIndex = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            zeroIndex = i;
            for(let i = zeroIndex; )
        }
    }
}
moveZeros([0,1,0,3,12]);