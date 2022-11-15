// With O(n^2)
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

// With O(n)
const maxArea = (arr) => {
  let l = 0;
  let r = arr.length - 1;
  let area = 0;

  while (l < r) {
    // Calculating the max area
    area = Math.max(area, Math.min(arr[l], arr[r]) * (r - l));

    if (arr[l] < arr[r]) l += 1;
    else r -= 1;
  }
  return area;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
