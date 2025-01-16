const isValid = (s: string): boolean => {
    // Initialize a stack to keep track of opening brackets
    const stack: string[] = [];

    // Iterate through each character in the input string
    for (let i of s) {
        // If the character is an opening bracket, push it onto the stack
        if (i === '(' || i === '[' || i === '{') {
            stack.push(i);
        } else {
            // If the stack is empty, it means there's no matching opening bracket
            if (!stack.length) return false;

            // Pop the top element from the stack to check for matching
            let top = stack.pop();

            // Check if the popped bracket matches the current closing bracket
            if (
                (i === ')' && top !== '(') ||
                (i === ']' && top !== '[') ||
                (i === '}' && top !== '{')
            ) {
                return false; // Mismatch found, return false
            }
        }
    }

    // If the stack is empty, all brackets were matched properly; return true
    return stack.length === 0;
};