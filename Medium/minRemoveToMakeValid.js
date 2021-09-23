var minRemoveToMakeValid = function(s) {
    let roundBracketsStack = [];
    let roundBracketsIndexStack = [];
    let index = 0;
    while(index < s.length){
        if(s[index] === "("){
            roundBracketsStack.push("(");
            roundBracketsIndexStack.push(index);
            index++;
        } else if(s[index] === ")"){
            let lastChar = roundBracketsStack[roundBracketsStack.length - 1];
            if(lastChar === "("){
                roundBracketsStack.pop();
                roundBracketsIndexStack.pop();
                index++;
            } else if(!roundBracketsStack.length){
                s = s.slice(0, index) + s.slice(index + 1, s.length);
            }
        } else {
            index++;
        }
    }
    if(roundBracketsStack.length && roundBracketsIndexStack.length){
        for(let i = roundBracketsIndexStack.length - 1; i >= 0; i--){
            s =  s.slice(0, roundBracketsIndexStack[i]) + s.slice(roundBracketsIndexStack[i] + 1, s.length)
        }
        console.log(s);
        return s;
    } else {
        console.log(s);
        return s;
    }
};

minRemoveToMakeValid("lee(t(c)o)de)");
minRemoveToMakeValid("a)b(c)d");
minRemoveToMakeValid("))((");
minRemoveToMakeValid("(a(b(c)d)");
minRemoveToMakeValid(")((c)d()(l");