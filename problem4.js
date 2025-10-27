function countMultiples(arr) {
  const result = {}; // Object to store counts for each i (1–9)
  for (let i = 1; i <= 9; i++) {
    result[i] = arr.filter((num) => num % i === 0).length;
    // Filters numbers divisible by i, counts them
  }
  return result;
}

// Example:
const input = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
console.log(countMultiples(input));