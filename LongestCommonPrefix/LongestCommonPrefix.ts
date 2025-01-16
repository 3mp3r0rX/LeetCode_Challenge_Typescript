const longestCommonPrefix = (strs: string[]): string => {
    // If the input array is empty, return an empty string
    if (strs.length === 0) return "";

    // Find the shortest string in the array
    let shorter = strs.reduce((a, b) => a.length < b.length ? a : b);

    // Iterate through each character of the shortest string
    for (let i = 0; i < shorter.length; i++) {
        // Check each string in the array
        for (let str of strs) {
            // If the current character does not match, return the prefix up to this point
            if (str[i] !== shorter[i]) {
                return shorter.slice(0, i);
            }
        }
    }

    // If all characters matched, return the entire shortest string as the common prefix
    return shorter;
}