const TowSums = (nums: number[], target: number): number[] => {
    // Create a map to store the numbers and their indices
    const map = new Map<number, number>();

    // Iterate through the array of numbers
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement of the current number
        const complement = target - nums[i];

        // Check if the complement exists in the map
        if (map.has(complement)) {
            // If it exists, return the indices of the complement and the current number
            return [map.get(complement)!, i];  // Use non-null assertion since we know it exists
        }

        // If complement doesn't exist, add the current number and its index to the map
        map.set(nums[i], i);
    }
    
    // Return an empty array if no solution is found
    return [];
}