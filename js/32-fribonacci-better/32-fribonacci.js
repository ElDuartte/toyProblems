function fibonacci(userNumber) {
  const fib = [0, 1];

  // ejecuta la cantidad de veces que es n
  for (let e = 2; e < userNumber; e += 1) {
    fib[e] = fib[e - 1] + fib[e - 2];
  }
  return fib;
}
// suma los dos ultimos numeros
// console.log(fibonacci(2)); //[0,1]
// console.log(fibonacci(3)); //[0,1,1]
// console.log(fibonacci(7)); //[0,1,1,2,3,5,8]
console.log(fibonacci(5)); //[0,1,1,2,3,5,8]

// en el array estas dos posiciones son iniciales y no cambian
// vvvvvv
// [0, 1]
// cuando el "for" hace el loop agrega el nuevo numero al final del array
//--------V
// [0, 1, 1]
// y continua hasta que en el "for" "e" es igual al userNumber
