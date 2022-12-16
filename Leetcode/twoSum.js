const twoSum = (nums, target) => {
    const map = {};
  
    for (let i = 0; i < nums.length; i++) {
      const another = target - nums[i];
  
      if (another in map) {
        return [map[another], i];
      }
  
      map[nums[i]] = i;
    }
  
    return null;
  };


  twoSum([1, 5, 4, 11, 2, 8, 7], 9);