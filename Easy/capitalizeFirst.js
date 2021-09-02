function capitalizeFirst(arr){
    if(arr.length === 1){
        return [arr[0][0].toUpperCase() + arr[0].slice(1)];
    }
    let lastElemOfArr = arr.pop();
    return capitalizeFirst(arr).concat(lastElemOfArr[0].toUpperCase() + lastElemOfArr.slice(1));
}

let x = capitalizeFirst(["hello", "world", "t", "ea"]);
console.log(x);