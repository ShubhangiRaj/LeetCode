var romanToInt = function(s) {
    let romanNumeralsHashmap = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000,
        "IV" : 4,
        "IX" : 9,
        "XL" : 40,
        "XC" : 90,
        "CD" : 400,
        "CM" : 900
    }
//     check is s is present as is in the above two hashmaps
    if(romanNumeralsHashmap[s]){
        console.log(romanNumeralsHashmap[s]);
        return romanNumeralsHashmap[s]
    }
//     if s is not directly present in the hashmap
    let finalInt = 0;
    for(let i = 0; i < s.length;){
        if(i === s.length - 1){
            finalInt += romanNumeralsHashmap[s[i]];
            console.log(finalInt);
            return finalInt;
        }
        if(romanNumeralsHashmap[s.substring(i, i+2)]){
            finalInt += romanNumeralsHashmap[s.substring(i, i+2)];
            i += 2;
        } else if(!romanNumeralsHashmap[s.substring(i, i+2)]){
            finalInt += romanNumeralsHashmap[s[i]];
            i += 1;
        }
    }
    console.log(finalInt);
    return finalInt;
//     let intArr = [];
//     for(let i = 0; i < s.length; i++){
//         intArr.push(romanNumeralsHashmap[s[i]]);
//     }
//     console.log(intArr);
// // traverse intArr in reverse and check if all elems can be added at one go
//     let finalInt = 0;
//     for(let i = intArr.length - 1; i >= 0;){
//         if(i === 0){
//             finalInt += intArr[i];
//             console.log(finalInt);
//             return finalInt;
//         }
//         if(intArr[i-1] >= intArr[i]){
//             // let tempInt = intArr[i-1] + intArr[i];
//             finalInt += intArr[i];
//             i--;
//         } else if(intArr[i-1] < intArr[i]){
//             let tempInt = intArr[i] - intArr[i-1];
//             finalInt += tempInt;
//             i -= 2;
//         }
//     }
//     console.log(finalInt);
//     return finalInt;
};
// romanToInt("IV");
// romanToInt("D");
// romanToInt("LVIII");
romanToInt("MCMXCIV");
romanToInt("XVIII");