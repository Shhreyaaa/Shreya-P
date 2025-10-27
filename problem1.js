// Problem-1: Calculator using Class

class Calculator {
  constructor(a, b, operation) {
// Initialize operands and operation type
    this.a = a;
    this.b = b;
    this.operation = operation;
  }
// Method to perform calculation based on the operation
  getResult() {
    switch (this.operation) {
      case "add":
        return this.a + this.b;
      case "subtract":
        return this.a - this.b;
      case "multiply":
        return this.a * this.b;
      case "divide":
        // Prevent division by zero
        return this.b !== 0 ? this.a / this.b : "Cannot divide by zero";
      default:
        return "Invalid operation";
    }
  }
}

// Example:
const calc = new Calculator(10, 5, "multiply");
console.log("Result:", calc.getResult());
