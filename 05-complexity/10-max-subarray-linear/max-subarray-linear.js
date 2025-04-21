function maxSubarraySum(arr, k) {
    let maxSum = 0;
    let currentSum = 0;

    for(let i = 0; i < k; i++){
        maxSum += arr[i];
    }
    
    currentSum = maxSum;

    for(let i = k; i < arr.length; i++){
        currentSum = currentSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}
const arr2 = [-2, -5, -3, -1, -11, -7, -6, -4];
console.log(maxSubarraySum(arr2, 4))
//2 3 4 5 6
//2
//2 + 3 -> 5
//3 4
module.exports = maxSubarraySum;
