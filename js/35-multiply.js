function grow(x) {
  let product = 1;

  x.forEach((element) => {
    product = element * product;
  });

  return console.log(product);
}

// console.log(grow([1, 2, 3])); // 6
console.log(grow([2, 2, 2, 2, 2, 2])); // 64
