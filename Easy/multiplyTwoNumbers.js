function multiplyTwoNumbers(num1, num2) {

    // Check if either number is 0
    if(num1 === 0 || num2 === 0){
        return 0;
    }

    // Check if any number is 1
    if(num1 === 1 || num2 === 1){
        return num1 === 1 ? num2 : num1;
    }

    let count = 1;
    let total = num1; 

    let result = addRecursive(count);
    return result;

    //// Recursive Add Num1 to itself till counts exhaust
    function addRecursive(count){
        if(count == num2){
            return num1;
        }
        addRecursive(count + 1);
        total += num1;
        return total;
    }
}

console.log(multiplyTwoNumbers(12, 3));