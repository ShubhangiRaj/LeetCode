function maxProfit(arr){
    let maxProfit = 0;
    for(let i = 0; i < arr.length; i++){
        if(i === arr.length - 1){
            return maxProfit;
        }
        let minPointer = i;
        let maxPointer = i + 1;
        if(arr[minPointer] < arr[maxPointer]){
            let currProfit = arr[maxPointer] - arr[minPointer];
            if(currProfit > maxProfit){
                maxProfit = currProfit;
            } else {
                continue;
            }
        }
        if(arr[minPointer] > arr[maxPointer]){
            continue;
        }
    }
}

maxProfit([7,1,5,3,6,4]);

// todo