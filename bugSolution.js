function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Arguments cannot be null'); // throw error
  }
  return a + b;
}

//console.log(foo(null, 1)); // throws an error
//console.log(foo(1, null)); // throws an error
console.log(foo(1, 2)); // outputs 3