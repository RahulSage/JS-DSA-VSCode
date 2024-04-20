function isBalanced(s) {
    // Write your code here
    let stack = [];
    let openBrackets = ['{','[','('];
    for(let bracket of s){
        if(openBrackets.includes(bracket)) stack.push(bracket);
        else {
            if(!stack.length) return 'NO'
            let poppedBracket = stack.pop();
            if((bracket === ')' && poppedBracket !== '(')
                  || (bracket === '}' && poppedBracket !== '{')
                  || (bracket === ']' && poppedBracket !== '[')) return 'NO';
        }
    }
    if(!stack.length) return 'YES';
    else return 'NO';
}
