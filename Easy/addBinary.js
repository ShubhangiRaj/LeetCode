// Given two binary strings a and b, return their sum as a binary string.

function addBinary(a, b){
    // carry is true is value is 1
    let carry = false;
    let res = "";
    if(a.length > b.length){
        let count = a.length - b.length;
        while(count > 0){
            b = "-" + b;
            count--;
        }
    } else if(b.length > a.length){
        let count = b.length - a.length;
        while(count > 0){
            a = "-" + a;
            count--;
        }
    }
    console.log(a);
    console.log(b);
    for(let i = a.length - 1; i >= 0; i--){
        // if a and b are 1;
        if(a[i] === "1" && b[i] === "1"){
            if(carry){
                res = "1" + res;
            } else {
                res = "0" + res;
                carry = true;
            }
        }
        // if a and b are 0;
        if(a[i] === "0" && b[i] === "0"){
            if(carry){
                res = "1" + res;
                carry = false;
            } else {
                res = "0" + res;
            }
        }
        // if a is 1 and b is 0 || b is 1 and a is 0
        if((a[i] === "1" && b[i] === "0") || (b[i] === "1" && a[i] === "0")){
            if(carry){
                res = "0" + res;
            } else {
                res = "1" + res;
            }
        }
        // if a[i] or b[i] === "-"; return;
        if((a[i] === "-" && b[i] === "1") || (a[i] === "1" && b[i] === "-")){
            if(carry){
                res = "0" + res;
            } else {
                res = "1" + res;
            }
        }
        if((a[i] === "-" && b[i] === "0") || (a[i] === "0" && b[i] === "-")){
            if(carry){
                res = "1" + res;
                carry = false;
            } else {
                res = "0" + res;
            }
        }
    }
    if(carry){
        res = "1" + res;
        console.log(res);
        return res;
    } else {    
        console.log(res);
        return res;
    }
}

addBinary("110010", "110011"); // "100"

// todo