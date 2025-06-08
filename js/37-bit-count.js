function countBits(n) {
  let arr = n.toString(2).split("");
  return arr.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue);
  }, 0);
}
console.log(countBits(10)); // 2
