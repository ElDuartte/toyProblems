function expandedForm(num) {
  let arrStr = num.toString().split("");
  let answers = [];

  arrStr.forEach((element, index) => {
    if (element === "0") return;
    if (element !== 0 && arrStr.length != index + 1) {
      answers.push(element + "0".repeat(arrStr.length - index - 1));
    } else if (arrStr.length == index + 1) {
      answers.push(element);
    }
  });
  return answers.join(" + ");
}

// console.log(expandedForm(12)); // "10 + 2"
console.log(expandedForm(70304)); // "70000 + 300 + 4"
// console.log(expandedForm(00000000)); // "70000 + 300 + 4"
