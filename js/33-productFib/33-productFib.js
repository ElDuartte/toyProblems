function productFib(prod) {
  let a = 0; //this would be F(n)
  let b = 1; //this would be F(n+1)

  while (a * b < prod) {
    const next = a + b;
    a = b;
    b = next;
  }

  return [a, b, a * b === prod];
}

console.log(productFib(4895)); //[55, 89, true]
