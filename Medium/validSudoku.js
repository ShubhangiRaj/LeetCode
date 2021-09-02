// Determine if a 9 x 9 Sudoku board is valid. 
// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

function isValidSudoku(matrix){
    // check if each row conatines digits 1-9 without repetition
    for(let row of matrix){
        let str = row.join('');
        // remove "."
        str = str.replace(/\./g,'');
        // split str back into arr and call validateArrForNonRepeatingNums()
        let result = validateArrForNonRepeatingNums(str.split(''));
        if(result){
            continue;
        } else {
            console.log("not a valid sudoku");
            return false;
        }
    }

    // // check if each column contains digits 1-9 without repetition
    // let colIndex = 0;
    // let tempArr = [];
    // for(let i = 0; i < arr.length; i++){
        
    // }
}
isValidSudoku(
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
); // true

function validateArrForNonRepeatingNums(arr){
    let tempArr = [];
    for(let i of arr){
        if(tempArr.indexOf(i) > -1){
            return false;
        } else {
            tempArr.push(i);
        }
    }
    return true;
}