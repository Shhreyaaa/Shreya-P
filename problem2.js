function generateSeries(x) {
  const result = [];
  for (let i = 1; i <= x; i++) {
    result.push(2 * i - 1);
  }
  return result;
}

// Example:
console.log(generateSeries(1));
console.log(generateSeries(2));
