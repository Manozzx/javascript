function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!"); // Throw a custom error
  }
  return a / b;
}

try {
  let result = divide(0.1, 5);
  console.log("Result:", result);
} catch (error) {
  console.error("Division error:", error.message);
}
