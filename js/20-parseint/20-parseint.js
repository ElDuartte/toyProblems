const wordAndNumbers = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
};

const times = { hundred: 100, thousand: 1000, million: 1000000 };

function parseInt(string) {
  // TODO: it's your task now
  // let dontWhantToUseRegex = string.split("");
  // return console.log(dontWhantToUseRegex);
  // let heyDontLikeRegex = dontWhantToUseRegex.split("-");
  // console.log(heyDontLikeRegex);
  return string.split(/ |-/).reduce((value, word) => {
    if (wordAndNumbers[word]) {
      value += wordAndNumbers[word];
    }
    if (times[word]) {
      value += times[word] * (value % times[word]) - (value % times[word]);
    }
    return value;
  }, 0);
}

module.exports = parseInt;
