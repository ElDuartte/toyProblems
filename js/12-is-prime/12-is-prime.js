function isPrime(num) {
  /* // Not optimized way (My code)
  // if the number is negative
  if(num <= 1){
    return false;
  }
  // Check from 2 to num-1
  for (let i = 2; i < num; i++){
    if (num % i == 0){
      return false;
    }
  }
  return true;
  */

  // code from stackoverflow with a time complexity: 0(1)
  if (num < 3) return num > 1;
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
}

module.exports = isPrime;
