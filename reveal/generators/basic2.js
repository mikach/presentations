function* odd(limit) {
    for (var i = 0; i < limit; i++) {
        if (i % 2) yield i;
    }
}

for (var i  of odd(10)) {
  console.log(i); // 1 3 5 7 9
}