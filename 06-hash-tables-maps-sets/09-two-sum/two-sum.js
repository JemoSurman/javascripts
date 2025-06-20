function twoSum(nums, target) {
    const set = new Set();

    for(let i = 0; i < nums.length; i++){
        const complement = target - nums[i];

        if(set.has(complement)){
            return [nums.indexOf(complement), i];
        }

        set.add(nums[i]);
    }

    return []; 
}

module.exports = twoSum;
