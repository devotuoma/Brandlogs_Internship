const minMaxSum = (arr) => {
    // Sort the array to easily find the smallest and largest values
    const sortedArr = arr.sort((a, b) => a - b);
    // Minimum sum is the sum of the first four numbers
    const minSum = sortedArr.slice(0, 4).reduce((a, b) => a + b, 0);
    // Maximum sum is the sum of the last four numbers
    const maxSum = sortedArr.slice(1).reduce((a, b) => a + b, 0);
    // Return the result as a string in the required format
    return `${minSum} ${maxSum}`;
};

// Example usage:
console.log(minMaxSum([1, 3, 5, 7, 9])); // Output: 16 24




const diagonalDifference = (matrix) => {
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    const n = matrix.length;

    matrix.forEach((row, i) => {
        primaryDiagonal += row[i];
        secondaryDiagonal += row[n - i - 1];
    });

    return Math.abs(primaryDiagonal - secondaryDiagonal);
};

// Example usage:
console.log(diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
])); // Output: 2




const divisibleSumPairs = (arr, k) => {
    let count = 0;

    arr.forEach((val, i) => {
        for (let j = i + 1; j < arr.length; j++) {
            if ((val + arr[j]) % k === 0) {
                count++;
            }
        }
    });

    return count;
};

// Example usage:
console.log(divisibleSumPairs([1, 2, 3, 4, 5, 6], 5)); // Output: 3
