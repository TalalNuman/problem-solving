var maxArea = function (height) {
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i; j < height.length; j++) {
      let maxHeight = height[i] > height[j] ? height[j] : height[i];
      let maxBase = j - i;
      let area = maxHeight * maxBase;
      max = area < max ? max : area;
    }
  }
  return max;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
