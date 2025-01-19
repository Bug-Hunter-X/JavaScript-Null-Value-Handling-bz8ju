function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.'); // Throw an error for null values
  }
  if (typeof a !== 'number' || typeof b !== 'number'){
    throw new Error('Inputs must be numbers.');
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
try {
  console.log(foo(null, 2)); // Throws an error
} catch (error) {
  console.error(error); // Output: Error: Null values are not allowed.
}
try {
  console.log(foo(1, null)); // Throws an error
} catch (error) {
  console.error(error); // Output: Error: Null values are not allowed.
}
try {
  console.log(foo(null, null)); // Throws an error
} catch (error) {
  console.error(error); // Output: Error: Null values are not allowed.
}
try {
  console.log(foo('a', 2)); // Throws an error
} catch (error) {
  console.error(error); // Output: Error: Inputs must be numbers.
}