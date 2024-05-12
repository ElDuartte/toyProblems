// Fibonacci sequence is a sequence in which each
// number is the sum of the two preceding ones

// I want a function that returns an array with
// the length specify with the n variable that is an user input

function fibonacci(n) {
  let a = 0,
    b = 1,
    next;
  const series = [];
  if (n >= 1) series.push(a);
  if (n >= 2) series.push(b);

  for (let i = 3; i <= n; i++) {
    next = a + b;
    a = b;
    b = next;
    series.push(next);
  }
  return console.log(series);
}

fibonacci(5);
