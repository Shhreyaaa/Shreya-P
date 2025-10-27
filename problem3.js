function generateSeries(a) {
  let series = [];
  let limit = a % 2 === 0 ? a - 1 : a;  // Ensures limit is odd

  for (let i = 1; i <= limit; i += 2) { // Increment by 2 to get only odd numbers
    series.push(i);
  }

  return series.join(", "); // Convert array to comma-separated string
}

// Example:
console.log(generateSeries(1));
console.log(generateSeries(2));
console.log(generateSeries(3));
