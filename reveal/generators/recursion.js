function* factorial(n) {
    return n === 0 ? 1 : n*(yield* factorial(n-1));
}

var gen = factorial(5);
console.log(gen.next()); // { value: 120, done: true }