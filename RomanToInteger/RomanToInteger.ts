const romanToInt = (s: string): number => {
    // Map to store the integer values of Roman numerals
    const romanMap: { [key: string]: number } = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let result = 0; // Variable to store the final integer value

    // Iterate through the string of Roman numerals
    for (let i = 0; i < s.length; i++) {
        // Get the value of the current Roman numeral
        let current = romanMap[s[i]];
        // Get the value of the next Roman numeral (if it exists)
        let next = romanMap[s[i + 1]];

        // If the current value is less than the next value, subtract it from the result
        if (current < next) {
            result -= current;
        } else {
            // Otherwise, add it to the result
            result += current;
        }
    }

    // Return the final integer value
    return result;
};