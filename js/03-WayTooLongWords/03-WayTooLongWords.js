/* Recibe  una palabra de mas de 10 caracteres debe abreviarse
con el primer caracter y el ultimo y en medio debe tener el numero
de caracteres que contiene en medio
EJE:
INPUT: localization
OUTPUT: l10n
*/

// https://codeforces.com/problemset/problem/71/A

const abbreviation = (word) => {
	let charAmount = word.length - 2;
	let copyWord = word;
	let firstChar = copyWord.charAt(0);
	let lastChar = copyWord.charAt(word.length - 1);
	let wordAbbreviated = firstChar.concat(charAmount, lastChar);
	console.log(wordAbbreviated);
};

const wtl = (word) => {
	// If the input is an integer
	if (!isNaN(word)) return;
	else if (word.length < 10) return console.log(word);
	else {
		abbreviation(word);
	}
};

wtl(process.argv[2]);
