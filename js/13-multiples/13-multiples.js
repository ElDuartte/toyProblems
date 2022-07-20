function solution(number){
  // will recibe 10 and needs to return 23
  let counter = 0;
  if(number <= 0){
    return 0;
  }
  let numArr = [...Array(number).keys()];
  numArr.forEach((n) => {
    if(n % 3 === 0 || n % 5 === 0){
      counter += n;
    }
  })
  return counter;
 }

module.exports = solution;
