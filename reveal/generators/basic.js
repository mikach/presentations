function* two() {
    yield 1;
    yield 2;
}

var gen = two();

console.log( gen.next() ); // { value: 1, done: false }
console.log( gen.next() ); // { value: 2, done: false }
console.log( gen.next() ); // { value: undefined, done: true }
console.log( gen.next() ); // Error: Generator has already finished