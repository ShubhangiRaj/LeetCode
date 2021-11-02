var plusOne = function(digits) {
    if(digits[digits.length -1] < 9){
        digits[digits.length -1] += 1;
        return digits;
    } else {
        for(let i = digits.length - 1; i >= 0;){
            if(digits[i] == 9){
                digits[i] = 0;
                if(i == 0){
                    digits.unshift(1);
                    return digits;
                } else {
                    i--;
                }
            } else if(digits[i] !== 9){
                digits[i] += 1;
                return digits;
            }
        }
    }
    
};

plusOne([4,3,2,1]);