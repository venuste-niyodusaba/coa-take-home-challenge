function arrayWithSum(arr, target) {
    const sumMap = new Map();
    let cumulativeSum = 0;

    for (let i = 0; i < arr.length; i++) {
        cumulativeSum += arr[i];

        // Check if the cumulative sum is equal to the target
        if (cumulativeSum === target) {
            return true;
        }

        // Check if there exists a subarray whose sum is the target
        if (sumMap.has(cumulativeSum - target)) {
            return true;
        }

        // Add the cumulative sum to the map
        sumMap.set(cumulativeSum, i);
    }

    return false;
}

// Example usage
const arr = [8, 1, 4, 1, 9, 2];
const target = 17;
console.log(arrayWithSum(arr, target)); // Output: true
