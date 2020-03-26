// O(n^2) time | O(1) space
const insertionSort = array => {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1])
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
    }
  }
  return array;
};