var sumOddLengthSubarrays = function(arr) {
    //  if arr.length is 1
        if(arr.length === 1){
            return arr[0];
        }
    //  find odd numbers between 1 to arr.length
        let arrLength = arr.length;
        let oddNumbers = [];
        while(arrLength > 0){
            if((arrLength % 2) !== 0){
                oddNumbers.push(arrLength);
            }
            arrLength--;
        }
    
    // write a function which takes input arr and odd length subarray  and returns the sum of subarray length
        let total = null;
        for(let i of oddNumbers){
            total += sumOfSubarrays(arr, i);
        }
        console.log(total);
        return total;
    };

    function sumOfSubarrays(inputArr, subarrayLength){
        const reducer = (current, accumulator) => current + accumulator;
        // if subArrayLength === inputArr.length
        if(inputArr.length === subarrayLength){    
            return inputArr.reduce(reducer);
        }
        // if subarray length < inputArr.length
        let pointer_1 = null;
        let pointer_2 = null;
        let total = null;
        for(let i = 0; i < inputArr.length; i++){
            pointer_1 = i;
            pointer_2 = i + subarrayLength - 1;
            if(pointer_2 >= inputArr.length){
                break;
            }
            while(pointer_1 <= pointer_2){
                total += inputArr[pointer_1];
                pointer_1++;
            }
        }
        return total;
    }

    sumOddLengthSubarrays([1,2,3,4,5,6]);
    sumOddLengthSubarrays([1,4,2,5,3]);