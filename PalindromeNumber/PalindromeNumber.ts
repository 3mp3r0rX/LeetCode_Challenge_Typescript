const isPalindrome = (x: number): boolean => {  
    if (x < 0) return false;  // Negative numbers are not palindromes

    let original = x;
    let reversed = 0;

    while (x > 0) {
        const digit = x % 10;  // Get the last digit
        reversed = reversed * 10 + digit;  // Build the reversed number
        x = Math.floor(x / 10);  // Remove the last digit from x
    }

    return original === reversed;  // Check if the original number and the reversed number are the same
}