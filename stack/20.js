const stack = []
const s = '(]'

for(let i=0;i < s.length;i++){
    if(s[i]=='(' | s[i] =='{' | s[i]=='['){
        stack.push(s[i])
    }else if(s[i]==')' && stack[stack.length -1]=='(' || 
    s[i]==']' && stack[stack.length -1]=='[' ||
    s[i]=='}' && stack[stack.length -1]=='{'
    ){
        stack.pop()
    }

}

return !stack.length