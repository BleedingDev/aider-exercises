function parseJSON(input) {
  return JSON.parse(input);
}

console.log(parseJSON('{"name": "Alice", age: "25"')); // Should fail: null
console.log(parseJSON('{"name": "Alice", "age": 25}')); // Should work: { name: 'Alice', age: 25 }
