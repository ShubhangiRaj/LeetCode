function validParentheses(str){
    let stack = [];
    if(str.length === 1){
        return false;
    }
    // a valid string cannot have a closing parentheses at the start
    if(str[0] === ")" || str[0] === "]" || str[0] === "}"){
        return false;
    }
    for(let i = 0; i < str.length; i++){
        if(str[i] === "(" || str[i] === "[" || str[i] === "{"){
            stack.push(str[i]);
        }
        if(str[i] === ")"){
            if(stack.length && stack[stack.length - 1] === "("){
                stack.splice(stack.length - 1, 1);
                continue;
            } else {
                console.log("false");
                return false;
            }
        }
        if(str[i] === "]"){
            if(stack.length && stack[stack.length - 1] === "["){
                stack.splice(stack.length - 1, 1);
                continue;
            } else {
                console.log("false");
                return false;
            }
        }
        if(str[i] === "}"){
            if(stack.length && stack[stack.length - 1] === "{"){
                stack.splice(stack.length - 1, 1);
                continue;
            } else {
                console.log("false");
                return false;
            }
        }
    }
    //     at the end of the loop, stack should be empty
    if(!stack.length){
        console.log("true");
        return true;   
    } else {
        console.log("false");
        return false;
    }
}
// validParentheses("()[]{}");
// validParentheses("(]");
// validParentheses("([)]");
// validParentheses("{[]}");
validParentheses("[[{");
// validParentheses("()");