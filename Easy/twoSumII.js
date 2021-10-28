var twoSum = function(numbers, target) {
    //    because it is a sorted array, we can use two pointers instead of hashmap
        let p1 = 0;
        let p2 = numbers.length - 1;
        while(p1 < p2){
            if(numbers[p1] + numbers[p2] === target){
                return [p1+1, p2+1];
            } else if(numbers[p1] + numbers[p2] > target){
                p2--;
            } else if(numbers[p1] + numbers[p2] < target){
                p1++;
            }
        }
        return;
};
twoSum([2,7,11,15], 9);
twoSum([0, 0, 1, 2], 0);
twoSum([-1, 0], -1);
twoSum([20, 30, 100], 130);