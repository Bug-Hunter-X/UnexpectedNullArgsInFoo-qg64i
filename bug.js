function foo(a, b) {
  if (a === null || b === null) {
    return 0; // intended behavior, but leads to unexpected results
  }
  return a + b;
}

console.log(foo(null, 1)); // outputs 0
console.log(foo(1, null)); // outputs 0
console.log(foo(1, 2)); // outputs 3