var twoSum = function(numbers, target) {
    for(let i = 0; i < numbers.length; i++){
        let secondNum = target >= numbers[i] ? target - numbers[i] : numbers[i] - target;
        if(numbers.lastIndexOf(secondNum) >= 0 && numbers.lastIndexOf(secondNum) !== i){
            console.log([ i + 1, numbers.lastIndexOf(secondNum) +1 ]);
            return [ i + 1, numbers.lastIndexOf(secondNum) +1 ];
        } else {
            continue;
        }
    }
};
twoSum([2,7,11,15], 9);
twoSum([0, 0, 1, 2], 0);
twoSum([-1, 0], -1);
twoSum([20, 30, 100], 130);