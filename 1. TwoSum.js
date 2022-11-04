// nums is an Array 
// target is the required sum of two elemts of the Array

var twoSum = function (nums, target) {
    for (let i = 0; i <= nums.length; i++) {
      for (let j = i+1; j <= nums.length - 1; j++) {
        if (nums[i] + nums[j] == target) {
          return [i,j];
        }
      }
    }
    return [];
  };
