function rot13(message) {
  // ascii values
  let asc = giveMeTheAs(message);
  // console.log(asc + " oldAs");
  let newAs = changeTheAs(asc);
  //console.log(newAs);

  return newAs;
}

// function to return the ascii values
function giveMeTheAs(message) {
  let arrMsg = [...message];
  let arrNum = [];
  for (let i = 0; i < arrMsg.length; i++) {
    arrNum.push(message[i].charCodeAt(0));
  }
  return arrNum;
}

// Function to return the NEW ascii values
function changeTheAs(asc) {
  console.log(asc + " the fuck");
}

module.exports = rot13;
