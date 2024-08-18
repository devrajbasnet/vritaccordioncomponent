function countSmaller(nums) {
  const counts = new Array(nums.length).fill(0);  
  const indices = nums.map((_, i) => i); 
  function mergeSort(left, right) {
      if (right - left <= 1) return;
      const mid = Math.floor((left + right) / 2);
      mergeSort(left, mid);
      mergeSort(mid, right);
      // Merge step
      const temp = [];
      let i = left, j = mid;

      while (i < mid || j < right) {
          if (j === right || (i < mid && nums[indices[i]] > nums[indices[j]])) {
              counts[indices[i]] += right - j;  
              temp.push(indices[i++]);

          } else {
              temp.push(indices[j++]);
          }
      }

      for (let k = left; k < right; k++) {
          indices[k] = temp[k - left];
      }
  }

  mergeSort(0, nums.length);
  return counts;
}

const nums = [5, 2, 6, 1];
console.log(countSmaller(nums)); 
