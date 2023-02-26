function removeChar(str) { //You got this/
  console.log(`${str} ORIGINAL.`);

  const chars = str.split('');
  console.log(`${chars} SPLIT.`);

  if (chars.length <= 2 ){
    console.log('error with length')
    return '';
  } else {
    const slice = chars.slice(1, chars.length - 1);
    console.log(`${slice} SLICE.`);
    console.log(`${slice.join('')} END.`);

    return slice.join('');
  }
}

module.exports = removeChar;
