var esValido = function(s){
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    const stack = [];

    for(let char of s){
        if(char in map){
            if(stack.length > 0 && stack[stack.length - 1] === map[char]){
                stack.pop();
            }else{
                return false;
            }
        }else{
            stack.push(char);
        }
    }
    return stack.length === 0;
};