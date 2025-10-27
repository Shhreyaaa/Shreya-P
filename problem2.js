// Problem-2: Generate a series of odd numbers until a = x

function generateSeries(x) {
  const result = [];

    // Generate 'x' odd numbers using formula: (2 * i - 1)
  for (let i = 1; i <= x; i++) {
    result.push(2 * i - 1);
  }
  return result;
}

// Example:
console.log(generateSeries(1));
console.log(generateSeries(2));
